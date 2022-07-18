import React from "react";

const Person = (id, name, surname) => {
  return (
    <div className="person">
      <h3>
        {name} {surname}
      </h3>
    </div>
  );
};

export default Person;
