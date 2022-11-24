import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  const [colorMode, setColorMode] = React.useState(true);

  function toggleDarkMode() {
    setColorMode((prevMode) => !prevMode);
  }

  return (
    <div className="container">
      <Navbar darkMode={colorMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={colorMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default App;
