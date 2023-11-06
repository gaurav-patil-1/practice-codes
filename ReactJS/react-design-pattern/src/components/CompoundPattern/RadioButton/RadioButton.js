import React from "react";
import RadioForm from "./RadioForm";

export default function RadioButton() {
  return (
    <RadioForm name="option" default="option1">
      <RadioForm.Heading />
      <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
        <RadioForm.OptionType name="option1">Option 1</RadioForm.OptionType>
        <RadioForm.OptionType name="option2">Option 2</RadioForm.OptionType>
        <RadioForm.OptionType name="option3">Option 2</RadioForm.OptionType>
      </ul>
    </RadioForm>
  );
}
