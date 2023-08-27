import Body from "./components/body";
import Profile from "./components/profile";
import video from "./assets/video.mp4";
import { useEffect, useState } from "react";
import Loader from "./components/loader";
import { AnimatePresence } from "framer-motion";
import Scroll from "./components/scroll";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [loader, setLoader] = useState(true);
  const [button, setButton] = useState(false);
  const handleOpenMenu = (bool) => {
    setOpenMenu(bool);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      document.querySelector(".pagination").style.width = scrolled + "%";
      if (window.scrollY > 500) {
        setButton(true);
      } else {
        setButton(false);
      }
    });
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
        onPlaying={() => setLoader(false)}
        playsInline
      ></video>
      <div
        className="pagination"
        style={{
          backgroundColor: "var(--clr-primary-400)",
          position: "fixed",
          top: 0,
          left: 0,
          height: ".2em",
          width: "0%",
          zIndex: 4,
        }}
      ></div>
      {loader && <Loader />}
      {button && (
        <AnimatePresence>
          <Scroll button={button} />
        </AnimatePresence>
      )}
    </main>
  );
}

export default App;
