function convertToTime(number) {
  let hours = Math.floor(number / 60);
  let minutes = number % 60;

  let getHours = hours == 1 ? "hour" : "hours";
  let getMinutes = minutes == 1 ? "minute" : "minutes";

  return hours + " " + getHours + "," + " " + minutes + " " + getMinutes;
}