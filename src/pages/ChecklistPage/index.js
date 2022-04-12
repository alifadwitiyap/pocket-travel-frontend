import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";
import { useSelector } from "react-redux";
import getBackendUrl from "../../utils/getBackendUrl";

function ChecklistPage() {
  const [listItem, setListItem] = useState([]);
  const [name, setName] = useState("");
  const { user_id, token } = useSelector((state) => state.auth);

  // TODO: update this when backend is ready
  const fetchChecklist = useCallback(async () => {
    const getData = await axios
      .get(`${getBackendUrl()}/checklist/${user_id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data.itemList)
      .catch((error) => console.log(error));
    setListItem(getData);
  }, [user_id, token]);

  useEffect(() => {
    if (listItem.length === 0) {
      fetchChecklist();
    }
  }, [listItem.length, fetchChecklist]);

  const handleAddItem = () => {
    const storeData = async () => {
      await axios.post(
        `${getBackendUrl()}/checklist/${user_id}`,
        {
          name: name,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    };

    if (storeData()) {
      fetchChecklist();
      setName("");
    }
  };

  const toggleCheckbox = (id) => console.log(id);
  const editHandler = (id) => console.log(`edit ${id}`);
  const deleteHandler = (id) => {
    const storeData = async () => {
      await axios.delete(`${getBackendUrl()}/checklist/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    };

    if (storeData()) {
      fetchChecklist();
    }
  };

  return (
    <div className="flex flex-col items-center mt-6">
      <div className="relative bg-white border-2 border-gray-300 p-5 w-4/5 sm:w-2/3 md:w-1/2 xl:w-1/3 mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Checklist</h1>
        </div>
      </div>

      <div className="bg-white border-2 border-gray-300 p-5 mb-6 w-4/5 sm:w-2/3 md:w-1/2 xl:w-1/3">
        <div className="flex gap-4 mb-5">
          <input
            name="add-item"
            type="text"
            className="flex-[4_1_0%] appearance-none rounded-2xl relative block w-full px-3 py-2 border border-black placeholder-gray-300 text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Item name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <button
            className="flex-[1_1_0%] px-4 py-1 border border-transparent rounded-2xl shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={handleAddItem}
          >
            Add Item +
          </button>
        </div>

        <p className="text-gray-600 mb-3">
          {listItem.filter((item) => item.is_checked).length}/{listItem.length}
        </p>

        {listItem.map((item) => (
          <div key={item.item_id} className="flex gap-4 py-1 items-center">
            <input
              type="checkbox"
              checked={item.is_checked}
              onChange={() => toggleCheckbox(item.item_id)}
            />
            <p>{item.name}</p>
            <div className="grow h-[1px] bg-gray-500"></div>
            <button
              className="text-lg text-indigo-600 hover:text-indigo-700"
              type="button"
              onClick={() => editHandler(item.item_id)}
            >
              <HiOutlinePencil />
            </button>
            <button
              className="text-lg text-red-600 hover:text-red-700"
              type="button"
              onClick={() => deleteHandler(item.item_id)}
            >
              <HiOutlineTrash />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChecklistPage;
