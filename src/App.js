import React, { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="app">
      {user ? <h2>Logged in</h2> : <h2>Please Login</h2>}
    </div>
  );
}

export default App;
