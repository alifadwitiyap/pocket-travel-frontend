import timeSelections from './timeSelections.json';

function TimePicker({ value, onChange }) {
  return (
    <select
      name="time"
      value={value}
      onChange={onChange}
    >
      {timeSelections.map((time, index) => (
        <option key={index} value={time}>
          {time}
        </option>
      ))}
    </select>
  );
}

export default TimePicker