import React from "react";
import RadioForm from "./RadioForm";

export default function RadioButton() {
  return (
    <RadioForm default="option1">
      <RadioForm.OptionType name="option1">Option 1</RadioForm.OptionType>
      <RadioForm.OptionType name="option1">Option 2</RadioForm.OptionType>
      <RadioForm.OptionType name="option1">Option 2</RadioForm.OptionType>
    </RadioForm>
  );
}
