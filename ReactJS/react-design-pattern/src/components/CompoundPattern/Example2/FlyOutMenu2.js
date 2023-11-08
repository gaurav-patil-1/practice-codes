import React from "react";
import { FlyOut2 } from "./FlyOut2";

export default function FlyOutMenu2() {
  return (
    <FlyOut2>
      <FlyOut2.Toggle2 />
      <FlyOut2.List2>
        <FlyOut2.Item2>Edit</FlyOut2.Item2>
        <FlyOut2.Item2>Delete</FlyOut2.Item2>
      </FlyOut2.List2>
    </FlyOut2>
  );
}
