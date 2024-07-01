import Constellation from "@/components/Constellation";
import Loader from "@/components/Loader";
import PaginationWrapper from "@/components/PaginationWrapper";
import { useEffect, useState } from "react";


function MinorUIWrapper() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoader(false);
    }, 5000)

    return () => {
      clearTimeout(timeout)
    }
  }, []);

  return (
    <>
      {loader && <Loader />}
      <Constellation />
      <PaginationWrapper />
    </>
  );
}

export default MinorUIWrapper;
