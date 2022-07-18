import React from "react";
import db from "./firebase";
import "./Person.css";

const Person = (id, name, surname) => {
  const deletePerson = () => {
    db.collection("people").doc(id).delete();
  };
  return (
    <div className="person">
      <h3>
        {name} {surname}
      </h3>
      <button onClick={deletePerson}>Delete</button>
    </div>
  );
};

export default Person;
