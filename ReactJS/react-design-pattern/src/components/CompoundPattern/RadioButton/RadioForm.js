import React, { useState, useContext, createContext } from "react";

const RadioFormContext = createContext();

export default function RadioForm(props) {
  const [option, setOption] = useState(props.default);
  const onOptionChange = (newOption) => {
    setOption(newOption);
  };
  return (
    <RadioFormContext.Provider value={{ option, setOption, onOptionChange }}>
      {props.children}
    </RadioFormContext.Provider>
  );
}

function OptionType(props) {
  const { option, onOptionChange } = useContext(RadioFormContext);
  return (
    <li>
      <input
        type="radio"
        name="options"
        value={props.name}
        checked={props.name === option}
        onChange={() => onOptionChange(props.name)}
      ></input>
      {props.children}
    </li>
  );
}

function Heading() {
  const { option } = useContext(RadioFormContext);
  return <h1>You Have Selected : {option}</h1>;
}

RadioForm.OptionType = OptionType;
RadioForm.Heading = Heading;
