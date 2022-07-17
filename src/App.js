import React, { useState, useEffect } from "react";
import "./App.css";
import { auth } from "./firebase";
import Login from "./Login";
import Home from "./Home";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  return <div className="app">{user ? <Home user={user} /> : <Login />}</div>;
}

export default App;
