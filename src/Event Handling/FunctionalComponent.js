import React from "react";

export default function FunctionalComponent() {
  function clickHandler() {
    console.log("Button is Clicked");
  }
  return (
    <div>
      <button onClick={clickHandler}>Functional Button</button>
    </div>
  );
}
