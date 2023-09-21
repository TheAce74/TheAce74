import Body from "./components/body";
import Profile from "./components/profile";
import video from "./assets/video.mp4";
import { useEffect, useState } from "react";
import Loader from "./components/loader";
import Arrow from "./components/arrow";
import AppContextProvider from "./context/AppContext";

function App() {
  const [UI, setUI] = useState({
    loader: true,
    arrow: false,
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      document.querySelector(".pagination").style.width = scrolled + "%";
      if (window.scrollY > 500) {
        setUI((prevUI) => {
          return {
            ...prevUI,
            arrow: true,
          };
        });
      } else {
        setUI((prevUI) => {
          return {
            ...prevUI,
            arrow: false,
          };
        });
      }
    });
  }, []);

  return (
    <AppContextProvider>
      <main className="app">
        <div className="app__overlay">
          <Profile />
          <Body />
        </div>
        <video
          src={video}
          muted
          loop
          autoPlay
          className="app__video"
          aria-hidden="true"
          onPlaying={() =>
            setUI((prevUI) => {
              return {
                ...prevUI,
                loader: false,
              };
            })
          }
          playsInline
        ></video>
        <div className="pagination"></div>
        {UI.loader && <Loader />}
        <Arrow arrow={UI.arrow} />
      </main>
    </AppContextProvider>
  );
}

export default App;
