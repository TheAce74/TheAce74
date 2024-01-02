import video from "../assets/video.mp4";
import { useState } from "react";
import Loader from "./Loader";
import PaginationWrapper from "./PaginationWrapper";

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
        onPlaying={() => setLoader(false)}
        playsInline
      ></video>
      {loader && <Loader />}
      <PaginationWrapper />
    </>
  );
}

export default MinorUIWrapper;
