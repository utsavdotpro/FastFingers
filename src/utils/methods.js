const getReadableScore = (milliseconds) => {
  let seconds = "" + Math.floor(milliseconds / 1000);
  milliseconds = "" + Math.floor(milliseconds % 1000);

  seconds = seconds.padStart(2, "0");
  milliseconds = milliseconds.padStart(4, "0");

  return "00 : " + seconds + " . " + milliseconds;
};

export { getReadableScore };
