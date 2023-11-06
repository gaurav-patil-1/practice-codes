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
    <ul>
      <input
        type="radio"
        name={props.name}
        checked={props.name === option}
        onChange={onOptionChange(props.name)}
      ></input>
      {props.children}
    </ul>
  );
}

RadioForm.OptionType = OptionType;
