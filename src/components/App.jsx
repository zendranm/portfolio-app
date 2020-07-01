import React from "react";
import NavBar from "components/NavBar";
import NavButton from "components/NavButton";

function App() {
  let navOption;
  // Here add condition from onClick
  if (false) {
    navOption = <NavButton />;
  } else {
    navOption = <NavBar />;
  }
  return <div className="App">{navOption}</div>;
}

export default App;
