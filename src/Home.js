import "./Home.css";
import db, { auth } from "./firebase";
import React, { useState } from "react";

function Home({ user }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const [people, setPeople] = useState([]);

  useEffect(() => {
    db.collection("people").onSnapshot((snapshot) => {
      setPeople(snapshot.docs.map((doc) => ({})));
    });

    return () => {
      second;
    };
  }, []);

  const add = (e) => {
    e.preventDefault();
    db.collection("people").add({
      name: name,
      surname: surname,
    });
    setName("");
    setSurname("");
  };
  return (
    <div className="home">
      <h4>Welcome {user.displayName} 🎉 </h4>
      <button onClick={() => auth.signOut()}>Log out</button>
      <form>
        Name{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        Surname{" "}
        <input
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <button onClick={add}>Add</button>
      </form>
      <div className="home_people"></div>
    </div>
  );
}

export default Home;
