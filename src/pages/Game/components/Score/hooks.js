import { useEffect, useRef, useState } from "react";
import { getReadableScore } from "../../../../utils/methods";

function useScore(defaultIsStarted) {
  const [isStarted, setIsStarted] = useState(defaultIsStarted);
  const [tick, setTick] = useState(0);

  const timer = useRef(null);

  const clearTimer = () => clearInterval(timer.current);

  useEffect(() => {
    if (isStarted)
      timer.current = setInterval(() => setTick((tick) => tick + 10), 10);
    else clearTimer();

    return clearTimer;
  }, [isStarted]);

  const start = () => setIsStarted(true);

  const pause = () => setIsStarted(false);

  const stop = () => {
    setIsStarted(false);
    setTick(0);
  };

  const getScore = () => getReadableScore(tick);

  return [start, pause, stop, getScore];
}

export { useScore };
