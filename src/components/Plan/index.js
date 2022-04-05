import React from 'react';
import PropTypes from 'prop-types';
import ReactCountryFlag from 'react-country-flag';
import More from '../More';
import exampleData from './exampleData';

function Plan({ data }) {
  const { name, date, country, schedule } = data;
  return (
    <div className="relative bg-white border-2 border-gray-300 p-5 w-4/5 sm:w-2/3 lg:w-1/3">
      <div className="mb-2 flex items-center justify-between">
        <ReactCountryFlag countryCode={country} className="mr-2 sm:mr-4" style={{ fontSize: '18px' }} />
        <h2 className="grow font-bold">{name}</h2>
        <p className="text-gray-700">{date}</p>
      </div>
      <div className="text-sm grid grid-cols-[4ch_8px_1fr] gap-x-5 gap-y-1">
        {schedule.map((item, index) => (
          <React.Fragment key={index}>
            <div className="flex items-center justify-end">
              <p className="text-gray-600">{item.time}</p>
            </div>

            {/* Fancy timeline */}
            <div className="relative flex justify-center items-center translate-y-[2px]">
              <div className="w-2 h-2 z-10 rounded-full bg-gray-800"></div>
              {(() => {
                if (schedule.length === 1) return;

                if (index === 0) {
                  return <div className="absolute bg-gray-400 w-[2px] h-[100%] translate-y-1/2"></div>
                } else if (index === schedule.length - 1) {
                  return <div className="absolute bg-gray-400 w-[2px] h-[100%] -translate-y-1/2"></div>
                } else {
                  return <div className="absolute bg-gray-400 w-[2px] h-[150%]"></div>
                }
              })()}
            </div>

            <p>{item.activity}</p>
          </React.Fragment>
        ))}
      </div>
      <div className="absolute right-5 bottom-5">
        {/* TODO: Add handlers for edit and delete */}
        <More />
      </div>
    </div>
  );
}

Plan.defaultProps = {
  data: exampleData
}

Plan.propTypes = {
  data: PropTypes.object
};

export default Plan;
