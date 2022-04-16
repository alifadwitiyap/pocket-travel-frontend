import { useState } from 'react';
import PropTypes from 'prop-types';
import { FiMoreHorizontal } from 'react-icons/fi';
import './index.css';

function More({ editHandler, deleteHandler }) {
  const [isOpened, setIsOpened] = useState(false);

  const onClickHandler = () => {
    setIsOpened((c) => !c);
  };

  return (
    <div className="relative z-10">
      <div className="w-fit p-1 text-lg cursor-pointer hover:bg-gray-200 rounded" onClick={onClickHandler}>
        <FiMoreHorizontal />
      </div>
      {isOpened && (
        <div className="absolute bg-white w-20 border-2 border-gray-300 rounded-sm p-1 translate-y-1 -translate-x-14">
          <button type="button" className="btn-more" onClick={(e) => editHandler(e)}>Edit</button>
          <button type="button" className="btn-more text-red-500" onClick={(e) => deleteHandler(e)}>Delete</button>
        </div>
      )}
    </div>
  );
}

More.defaultValue = {
  editHandler: () => {},
  deleteHandler: () => {}
};

More.propTypes = {
  editHandler: PropTypes.func,
  deleteHandler: PropTypes.func
};

export default More;
