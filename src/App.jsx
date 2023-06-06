import Body from "./components/body";
import Profile from "./components/profile";
import video from "./assets/video.mp4";
import { useEffect, useState } from "react";
import Loader from "./components/loader";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = bool => {
    setOpenMenu(bool);
  };

  useEffect(() => {
    const reveal = () => {
      document.querySelector(".pl").style.display = "none";
    };
    window.addEventListener("load", reveal);

    return () => {
      window.removeEventListener("load", reveal);
    };
  }, []);

  return (
    <main className="app">
      <div className="app__overlay">
        <Profile handleOpenMenu={() => handleOpenMenu(false)} />
        <Body openMenu={openMenu} handleOpenMenu={handleOpenMenu} />
      </div>
      <video
        src={video}
        muted
        loop
        autoPlay
        className="app__video"
        aria-hidden="true"
      ></video>
      <Loader />
    </main>
  );
}

export default App;
