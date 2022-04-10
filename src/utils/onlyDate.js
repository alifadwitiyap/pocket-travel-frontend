// this returns only the date and removes the exact time
const onlyDate = (date) => {
  if (date.includes("T")) return date.slice(0, date.indexOf("T"));
  return date;
}

export default onlyDate;
