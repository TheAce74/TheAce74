import video from "@/assets/video.mp4";
import Loader from "@/components/Loader";
import PaginationWrapper from "@/components/PaginationWrapper";
import { useState } from "react";

function MinorUIWrapper() {
  const [loader, setLoader] = useState(true);

  return (
    <>
      <video
        src={video}
        muted
        loop
        autoPlay
        className="app__video"
        aria-hidden="true"
        onPlaying={() => {
          if (loader) {
            setLoader(false);
          }
        }}
        playsInline
      ></video>
      {loader && <Loader />}
      <PaginationWrapper />
    </>
  );
}

export default MinorUIWrapper;
