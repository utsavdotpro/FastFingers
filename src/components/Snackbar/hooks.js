import { useEffect, useRef, useState } from "react";

function useSnackbar(duration, shown = false) {
  const [isShown, setIsShown] = useState(shown);

  const durationTimer = useRef(null);

  useEffect(() => {
    if (isShown) durationTimer.current = setTimeout(hide, duration);
    return clearDurationTimer;
  }, [isShown, duration]);

  const clearDurationTimer = () => clearTimeout(durationTimer.current);

  const show = () => setIsShown(true);

  const hide = () => setIsShown(false);

  return [isShown, show, hide];
}

export { useSnackbar };
