import React from "react";

const Method = (props) => {
  return (
    <li>
      <input
        type="radio"
        name="option"
        value={props.name}
        checked={props.name === props.payment}
        onChange={() => {
          props.switch(props.name);
        }}
      />
      {props.children}
    </li>
  );
};

export default Method;
