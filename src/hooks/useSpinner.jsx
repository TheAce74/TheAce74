import { useEffect, useRef, useState } from "react";
import Spinner from "../components/spinner";

function useSpinner() {
  const [loading, setLoading] = useState(true);
  const spinnerRef = useRef(null);

  const spinner = () => {
    return loading && <Spinner />;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (spinnerRef.current?.complete) {
        setLoading(false);
        clearInterval(timer);
      }
    }, 3000);
  }, []);

  return { spinner, spinnerRef, loading };
}

export { useSpinner };
