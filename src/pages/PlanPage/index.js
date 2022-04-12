import { useCallback, useEffect, useState } from 'react';
import Plan from '../../components/Plan';
import FormModalPlan from '../../components/FormModalPlan';
import axios from 'axios';
import { useSelector } from 'react-redux';
import getBackendUrl from '../../utils/getBackendUrl';
import { notifySuccess } from '../../utils/notify';

function PlanPage() {
  const { user_id, token } = useSelector((state) => state.auth);

  const [{ isModalOpened, modalAction, planId }, setModalState] = useState({
    isModalOpened: false,
    modalAction: '',
    planId: '',
  });
  const [plans, setPlans] = useState([]);

  const fetchPlans = useCallback(() => {
    axios
      .get(`${getBackendUrl()}/plan/${user_id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setPlans(res.data.plans))
      .catch((err) => console.log(err));
  }, [user_id, token]);

  useEffect(() => {
    fetchPlans();
  }, [fetchPlans]);

  const createPlanModalHandler = () => {
    setModalState((prev) => ({
      ...prev,
      isModalOpened: true,
      modalAction: 'create',
    }));
  };

  const editPlanModalHandler = (id) => {
    setModalState((prev) => ({
      ...prev,
      isModalOpened: true,
      modalAction: 'edit',
      planId: id,
    }));
  };

  const onDeletePlan = (id) => {
    axios
      .delete(`${getBackendUrl()}/plan/${id}/detail`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        fetchPlans();
        notifySuccess('Plan successfully deleted');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col items-center mt-6">
      <div className="relative border-2 border-gray-300 p-5 w-4/5 sm:w-2/3 lg:w-1/3 mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Plans</h1>
          <button
            type="button"
            onClick={createPlanModalHandler}
            className="items-center px-4 py-1 border border-transparent rounded-2xl shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create+
          </button>
        </div>
      </div>
      {plans.map((plan) => (
        <Plan
          key={plan.plan_id}
          data={plan}
          onEdit={editPlanModalHandler}
          onDelete={onDeletePlan}
        />
      ))}
      {isModalOpened && (
        <FormModalPlan
          planId={planId}
          action={modalAction}
          setModal={(open) =>
            setModalState((prev) => ({ ...prev, isModalOpened: open }))
          }
          fetchPlans={fetchPlans}
        />
      )}
    </div>
  );
}

export default PlanPage;
