import Body from "./components/body";
import Profile from "./components/profile";
import video from "./assets/video.mp4";
import { useState } from "react";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = bool => {
    setOpenMenu(bool);
  };

  return (
    <main className="app">
      <div className="app__overlay">
        <Profile handleOpenMenu={() => handleOpenMenu(false)} />
        <Body openMenu={openMenu} handleOpenMenu={handleOpenMenu} />
      </div>
      <video src={video} muted loop autoPlay className="app__video"></video>
    </main>
  );
}

export default App;
