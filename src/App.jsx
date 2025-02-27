import { useState } from "react";
import Navbar from "./components/Navbar";
import { UserContext, UserProvider } from "./context/UserContext";
import UserDetails from "./components/UserDetails";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        height: "100vh",
        width: "100vw",
        fontFamily: "sans-serif",
      }}
    >
      <ThemeProvider>
        <UserProvider>
          <Navbar />
          <UserDetails />
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
