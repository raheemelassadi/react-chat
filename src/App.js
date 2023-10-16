import "./App.css";
import NavBar from "./components/Navbar";
import Welcome from "./components/Welcome";
import ChatBox from "./components/ChatBox";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";




function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <NavBar />
      {!user ? (
        <Welcome />
      ) : (
        <>
          <ChatBox />
        </>
      )}
    </div>
  );
}

export default App;