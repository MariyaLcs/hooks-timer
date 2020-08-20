import React, { useState } from "react";

function App() {
  const [time, setTime] = useState();

  // function curentTime() {
  //   let time = new Date().toLocaleTimeString();
  //   setTime(time);
  // }

  function timer() {
    let time = new Date().toLocaleTimeString();
    setTime(time);
  }
  setInterval(timer, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={timer}>Get Time</button>
    </div>
  );
}

export default App;
