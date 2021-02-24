import { MIN_TIME_COUNTER } from "./configs";

const getReadableScore = (milliseconds) => {
  let seconds = "" + Math.floor(milliseconds / 1000);
  milliseconds = "" + Math.floor(milliseconds % 1000);

  seconds = seconds.padStart(2, "0");
  milliseconds = milliseconds.padStart(4, "0");

  return "00 : " + seconds + " . " + milliseconds;
};

const getRandomItem = (array) => {
  if (array.length <= 0) return "";
  return array[Math.floor(Math.random() * array.length)];
};

const getTimeForWord = (length, factor) => {
  return Math.max(Math.ceil(length / factor), MIN_TIME_COUNTER);
};

export { getReadableScore, getRandomItem };
