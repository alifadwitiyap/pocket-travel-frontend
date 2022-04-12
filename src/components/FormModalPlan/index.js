import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { HiOutlineTrash } from 'react-icons/hi';
import DatePicker from 'react-datepicker';
import TimePicker from '../TimePicker';
import CountryPicker from '../CountryPicker';
import 'react-datepicker/dist/react-datepicker.css';
import './index.css';
import axios from 'axios';
import { useSelector } from 'react-redux';
import getBackendUrl from '../../utils/getBackendUrl';
import { notifySuccess } from '../../utils/notify';

function FormModalPlan({ planId, action, setModal, fetchPlans }) {
  const { user_id, token } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    date: new Date(),
    country: '',
    name: '',
  });
  const [schedule, setSchedule] = useState([]);

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const addScheduleItem = () => {
    setSchedule((prev) => [
      ...prev,
      {
        time: '00:00',
        activity: '',
      },
    ]);
  };

  const deleteScheduleItem = (idx) => {
    setSchedule((prev) => [...prev.slice(0, idx), ...prev.slice(idx + 1)]);
  };

  const tableInputOnChange = (e, idx) => {
    setSchedule((prev) => {
      const cp = [...prev];
      cp[idx][e.target.name] = e.target.value;
      return cp;
    });
  };

  const handleOnSubmitForm = async (e) => {
    e.preventDefault();

    if (action === 'create') {
      await axios.post(
        `${getBackendUrl()}/plan/${user_id}`,
        {
          name: formData.name,
          date: formData.date,
          country: formData.country,
          schedule,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      notifySuccess('Plan successfully created');
    } else {
      await axios.put(
        `${getBackendUrl()}/plan/${planId}/detail`,
        {
          name: formData.name,
          date: formData.date,
          country: formData.country,
          schedule,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      notifySuccess('Plan successfully edited');
    }
    setModal(false);
    fetchPlans();
  };

  useEffect(() => {
    if (action === 'edit') {
      setIsLoading(true);
      axios
        .get(`${getBackendUrl()}/plan/${planId}/detail`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          const plan = res.data.plan;
          setFormData({
            date: new Date(plan.date),
            country: plan.country,
            name: plan.name,
          });
          setSchedule(plan.schedule);
          setIsLoading(false);
        })
        .catch((err) => err);
    }
  }, [planId, action, token]);

  return (
    <>
      <div
        className="fixed top-0 left-0 h-screen w-screen bg-black opacity-75"
        onClick={() => setModal(false)}
      ></div>
      <div className="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <form
          onSubmit={handleOnSubmitForm}
          className="bg-white py-6 px-10 rounded flex flex-col gap-2 md:flex-row md:gap-10"
        >
          {isLoading ? (
            <h1>loading...</h1>
          ) : (
            <>
              <div className="flex flex-col justify-between items-start">
                <div className="min-w-[300px]">
                  <h1 className="font-bold text-2xl mb-4">Plan</h1>
                  <div className="mb-4">
                    <label className="block font-bold mb-1">
                      Date<span className="text-red-700">*</span>
                    </label>
                    <DatePicker
                      className="appearance-none rounded relative block w-full px-3 py-2 border border-black placeholder-gray-300 text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      selected={formData.date}
                      onChange={(date) =>
                        setFormData((prev) => ({ ...prev, date }))
                      }
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block font-bold mb-1">
                      Country<span className="text-red-700">*</span>
                    </label>
                    <CountryPicker
                      country={formData.country}
                      onChange={(country) =>
                        setFormData((prev) => ({ ...prev, country }))
                      }
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block font-bold mb-1">
                      Plan Name<span className="text-red-700">*</span>
                    </label>
                    <input
                      className="appearance-none rounded relative block w-full px-3 py-2 border border-black placeholder-gray-300 text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      type="text"
                      name="name"
                      placeholder="ex: Bali Trip Plans"
                      value={formData.name}
                      onChange={onChange}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="px-4 py-1 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {action === 'create' ? "Create +" : "Edit"}
                </button>
              </div>
              <div className="w-[2px] h-auto bg-gray-300"></div>
              <div>
                <div className="flex items-center mb-4">
                  <h1 className="grow font-bold">Schedule</h1>
                  <button
                    type="button"
                    className="p-2 border-transparent rounded-lg shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-gray-100 border border-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={addScheduleItem}
                  >
                    Add Item +
                  </button>
                </div>
                <table className="form-modal border-collapse border border-gray-700">
                  <thead>
                    <tr>
                      <th>Time</th>
                      <th>Activity</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...Array(schedule.length)].map((_, index) => (
                      <tr key={index}>
                        <td className="p-2">
                          <TimePicker
                            value={schedule[index].time || '00:00'}
                            onChange={(e) => tableInputOnChange(e, index)}
                          />
                        </td>
                        <td className="p-1">
                          <input
                            className="border"
                            type="text"
                            name="activity"
                            value={schedule[index].activity || ''}
                            onChange={(e) => tableInputOnChange(e, index)}
                          />
                        </td>
                        <td className="p-2">
                          <button
                            type="button"
                            onClick={() => deleteScheduleItem(index)}
                            className="bg-red-600 hover:bg-red-700 p-2 rounded text-white"
                          >
                            <HiOutlineTrash />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </form>
      </div>
    </>
  );
}

FormModalPlan.defaultProps = {
  planId: '',
}

FormModalPlan.propTypes = {
  planId: PropTypes.string,
  action: PropTypes.oneOf(['create', 'edit']),
  setModal: PropTypes.func.isRequired,
  fetchPlans: PropTypes.func.isRequired
};

export default FormModalPlan;
