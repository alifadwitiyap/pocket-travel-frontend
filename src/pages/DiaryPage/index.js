import { useState } from 'react';
import FormModalDiary from '../../components/FormModalDiary';
import Post from '../../components/Post';

function DiaryPage() {
  const [{ isModalOpened, modalAction, diaryId }, setModalState] = useState({
    isModalOpened: false,
    modalAction: '',
    diaryId: '',
  });

  return (
    <div className="flex flex-col items-center mt-6">
      <div className="relative border-2 border-gray-300 p-5 w-4/5 sm:w-2/3 md:w-1/2 lg:w-1/3 mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Diary</h1>
          <button className="items-center px-4 py-1 border border-transparent rounded-2xl shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Create +
          </button>
        </div>
      </div>
      <button type="button" onClick={() => {
        setModalState({
          isModalOpened: true,
          modalAction: 'create',
          diaryId: ''
        })
      }}>open modal</button>
      <Post own />
      {isModalOpened && (
        <FormModalDiary
          planId={diaryId}
          action={modalAction}
          setModal={(open) =>
            setModalState((prev) => ({ ...prev, isModalOpened: open }))
          }
        />
      )}
    </div>
  );
}

export default DiaryPage;
