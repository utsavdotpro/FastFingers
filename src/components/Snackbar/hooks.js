import { useEffect, useRef, useState } from "react";

function useSnackbar(initialMessage = "", duration, shown = false) {
  const [message, setMessage] = useState(initialMessage);
  const [isShown, setIsShown] = useState(shown);

  const durationTimer = useRef(null);

  useEffect(() => {
    if (isShown) durationTimer.current = setTimeout(hide, duration);
    return clearDurationTimer;
  }, [isShown, duration]);

  const clearDurationTimer = () => clearTimeout(durationTimer.current);

  const show = (message = null) => {
    if (message) setMessage(message);
    setIsShown(true);
  };

  const hide = () => setIsShown(false);

  return { message, isShown, show, hide };
}

export { useSnackbar };
