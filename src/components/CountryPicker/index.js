import countries from '../../data/countries.json';

function CountryPicker({ country, onChange }) {
  return (
    <select
      className="appearance-none rounded relative block w-full px-3 py-2 bg-white border border-black placeholder-gray-300 text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
      value={country}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="" disabled>Select Country...</option>
      {countries.map(([code, name]) => (
        <option key={code} value={code}>
          {name}
        </option>
      ))}
    </select>
  );
}

export default CountryPicker;
