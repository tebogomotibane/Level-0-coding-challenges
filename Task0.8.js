function convertToTime(number) {
  const hours = Math.floor(number / 60);
  const minutes = number % 60;

  const getHours = (hours === 1 )? "hour" : "hours";
  const getMinutes = (minutes === 1) ? "minute" : "minutes";

  return hours + " " + getHours + "," + " " + minutes + " " + getMinutes;
}
