import PropTypes from 'prop-types';
import { FaRegUserCircle } from 'react-icons/fa';
import ReactCountryFlag from 'react-country-flag';
import More from '../More';
import exampleData from './exampleData';

function Post({ data, own }) {
  const { user, country, location, image, caption, date } = data;
  return (
    <div className="relative bg-white border-2 border-gray-300 w-4/5 sm:w-2/3 md:w-1/2 lg:w-1/3">
      <div className="flex items-center justify-between p-4">
        <FaRegUserCircle className="text-4xl mr-2" />
        <div className="grow">
          <h2 className="text-sm font-bold">{user}</h2>
          <div className="flex items-center text-xs">
            <ReactCountryFlag countryCode={country} className="mr-2" />
            <span className="text-gray-700">{location}</span>
          </div>
        </div>
        {own && <More />}
      </div>
      <img src={image} alt="helo" />
      <div className="p-4">
        <p className="text-sm mb-2">{caption}</p>
        <p className="text-xs text-gray-700">{date}</p>
      </div>
    </div>
  );
}

Post.defaultProps = {
  data: exampleData,
};

Post.propTypes = {
  data: PropTypes.object,
};

export default Post;
