import React, { useState } from "react";
// import Button from "./Button.js";

const btnOptions = [
  "option1",
  "option2",
  "option3",
  "option4",
  "option5",
  "option6",
];

const Chatbot = () => {
  const [btnPressVal, setBtnPressVal] = useState(false);
  const handle_click = (val) => {
    setBtnPressVal(val);
    console.log(val);
  };
  return (
    <div className="section ">
      <p className="title"> Exercise 1 </p>
      <div className="buttons" style={{ maxWidth: "500px" }}>
        {btnOptions.map((val, index) => (
          <Button val={val} key={index} btnCallback={handle_click} />
        ))}
      </div>
      <p className="is-size-3">
        You Just Pressed : {btnPressVal ? btnPressVal : "press any button"}
      </p>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

const Button = ({ val, btnCallback }) => {
  return (
    <a
      className="button is-medium is-outlined is-dark"
      onClick={() => btnCallback(val)}
    >
      {val}
    </a>
  );
};

export default Chatbot;
