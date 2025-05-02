import Body from "@/components/Body";
import MinorUIWrapper from "@/components/MinorUIWrapper";
import Profile from "@/components/Profile";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <main className="app">
      <div className="app__overlay">
        <Profile />
        <Body />
      </div>
      <MinorUIWrapper />
      <ToastContainer />
    </main>
  );
}

export default App;
