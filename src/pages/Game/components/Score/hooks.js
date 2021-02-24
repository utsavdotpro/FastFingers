import { useEffect, useReducer, useRef } from "react";
import { getReadableScore } from "../../../../utils/methods";

const reducer = (state, { started, tick }) => {
  return { ...state, started, tick };
};

function useScore(defaultIsStarted) {
  const [{ started, tick }, dispatch] = useReducer(reducer, {
    started: defaultIsStarted,
    tick: 0,
  });

  const timer = useRef(null);

  const clearTimer = () => clearInterval(timer.current);

  useEffect(() => {
    if (started)
      timer.current = setInterval(
        () => dispatch({ started, tick: tick + 10 }),
        10
      );
    else clearTimer();

    return clearTimer;
  }, [started, tick]);

  const start = () => dispatch({ started: true, tick });

  const pause = () => dispatch({ started: false, tick });

  const stop = () => dispatch({ started: false, tick: 0 });

  const getScore = () => getReadableScore(tick);

  return [start, pause, stop, getScore];
}

export { useScore };
