import Body from "./components/Body";
import Profile from "./components/Profile";
import AppContextProvider from "./context/AppContext";
import MinorUIWrapper from "./components/MinorUIWrapper";

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
    </main>
  );
}

export default App;
