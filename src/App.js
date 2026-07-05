import React from "react";

function App() {

  const message = "Welcome to React JS";
  const course = "React Basics";
  const college = "SVPCET";
  const name = "Mohammed sohel";


  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Display Text using String Literals</h1>

      <h2>{message}</h2>
      <h3>{course}</h3>
      <h4>{college}</h4>
      <p>{name}</p>
    </div>
  );
}

export default App;