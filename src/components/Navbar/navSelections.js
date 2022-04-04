import { HiOutlineHome, HiOutlineBookOpen, HiOutlineMap } from 'react-icons/hi';
import { RiTodoLine } from 'react-icons/ri';

const navSelections = [
  {
    icon: <HiOutlineHome />,
    path: '/',
  },
  {
    icon: <HiOutlineBookOpen />,
    path: '/diary',
  },
  {
    icon: <RiTodoLine />,
    path: '/checklist',
  },
  {
    icon: <HiOutlineMap />,
    path: '/plan',
  },
];

export default navSelections;
