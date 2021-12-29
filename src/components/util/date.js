export const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const getWeekdays = (today) => {
  if (today === 0) return weekdays;

  return [...weekdays.slice(today), ...weekdays.slice(0, today)];
};

export const weekdaysLong = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const getHours12Format = (index) => {
  return [
    "00 AM",
    "01 AM",
    "02 AM",
    "03 AM",
    "04 AM",
    "05 AM",
    "06 AM",
    "07 AM",
    "08 AM",
    "09 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "01 PM",
    "02 PM",
    "03 PM",
    "04 PM",
    "05 PM",
    "06 PM",
    "07 PM",
    "08 PM",
    "09 PM",
    "10 PM",
    "11 PM",
  ][index];
};

export const getDate = (localtime) => {
  const date = new Date(localtime);
  const weekdayIndex = date.getDay();
  const hour = date.getHours();
  const min = date.getMinutes();
  const monthday = date.getDate();
  const time = date.toLocaleTimeString();
  const utc = date.toUTCString().replace(/\d{1,2}:\d{1,2}:\d{1,2} GMT$/g, time);
  const period = date.toLocaleTimeString().match(/(AM|PM)/)[0];
  const amPmHour = date.toLocaleTimeString().match(/^\d{1,2}/g)[0];

  return {
    weekday: weekdays[weekdayIndex],
    weekdayFull: weekdaysLong[weekdayIndex],
    weekdayIndex,
    hour,
    period,
    amPmHour,
    min,
    monthday,
    utc,
    time,
  };
};
