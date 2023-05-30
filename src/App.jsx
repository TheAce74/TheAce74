import Body from "./components/body";
import Profile from "./components/profile";
import video from "./assets/video.mp4";

function App() {
  return (
    <main className="app">
      <div className="app__overlay">
        <Profile />
        <Body />
      </div>
      <video src={video} muted loop autoPlay className="app__video"></video>
    </main>
  );
}

export default App;
