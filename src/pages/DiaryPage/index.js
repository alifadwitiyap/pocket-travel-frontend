import { useCallback, useEffect, useState } from "react";
import FormModalDiary from "../../components/FormModalDiary";
import Post from "../../components/Post";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setDiary } from "../../features/diarySlice";
import { notifySuccess } from "../../utils/notify";
import useAuth from "../../utils/useAuth";

function DiaryPage() {
  const { token } = useSelector((state) => state.auth);
  const { diary } = useSelector((state) => state.diary);
  const dispatch = useDispatch();
  const [auth, isAuthenticated] = useAuth();

  const [{ isModalOpened, modalAction, diaryId }, setModalState] = useState({
    isModalOpened: false,
    modalAction: "",
    diaryId: "",
  });

  const fetchDiaries = useCallback(async () => {
    const diaries = await axios
      .get(`${process.env.REACT_APP_BASE_URL}/diary`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => res.data);
    dispatch(setDiary(diaries.data));
  }, [token, dispatch]);

  useEffect(() => {
    auth();
    if (!isAuthenticated) return;

    if (diary.length === 0) {
      fetchDiaries();
    }
  }, [auth, isAuthenticated, diary.length, fetchDiaries]);

  const editDiaryModalHandler = (id) => {
    setModalState((prev) => ({
      ...prev,
      isModalOpened: true,
      modalAction: "edit",
      diaryId: id,
    }));
  };

  const onDeleteDiary = (id) => {
    axios
      .delete(`${process.env.REACT_APP_BASE_URL}/diary/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        fetchDiaries();
        notifySuccess("Diary successfully deleted");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col items-center mt-6">
      <div className="relative border-2 bg-white border-gray-300 p-5 w-4/5 sm:w-2/3 md:w-1/2 lg:w-1/3 mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Diary</h1>
          <button
            type="button"
            className="items-center px-4 py-1 border border-transparent rounded-2xl shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => {
              setModalState({
                isModalOpened: true,
                modalAction: "create",
                diaryId: "",
              });
            }}
          >
            Create +
          </button>
        </div>
      </div>

      {diary.map((diary) => (
        <Post
          key={diary._id}
          data={diary}
          onEdit={editDiaryModalHandler}
          onDelete={onDeleteDiary}
          own
        />
      ))}

      {isModalOpened && (
        <FormModalDiary
          diaryId={diaryId}
          action={modalAction}
          setModal={(open) =>
            setModalState((prev) => ({ ...prev, isModalOpened: open }))
          }
          reset={fetchDiaries}
        />
      )}
    </div>
  );
}

export default DiaryPage;
