import Body from "@/components/Body";
import MinorUIWrapper from "@/components/MinorUIWrapper";
import Profile from "@/components/Profile";
import AppContextProvider from "@/context/AppContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <main className="app">
      <div className="app__overlay">
        <Profile />
        <AppContextProvider>
          <Body />
        </AppContextProvider>
      </div>
      <MinorUIWrapper />
      <ToastContainer />
    </main>
  );
}

export default App;
