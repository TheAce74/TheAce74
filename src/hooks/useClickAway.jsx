import { useEffect } from "react";

function useClickAway(ref, callback) {
  useEffect(() => {
    const handleClickAway = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClickAway);

    return () => {
      document.removeEventListener("mousedown", handleClickAway);
    };
  }, [ref, callback]);
}

export { useClickAway };
