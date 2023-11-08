import React, { useState } from "react";
import Icon2 from "./Icon2";

export function FlyOut2(props) {
  const [open, toggle] = useState(false);
  return (
    <div>
      {React.Children.map(props.children, (child) =>
        React.cloneElement(child, { open, toggle })
      )}
    </div>
  );
}

function Toggle2({ open, toggle }) {
  return (
    <div onClick={() => toggle(!open)}>
      <Icon2 />
    </div>
  );
}

function List2({ children, open }) {
  return open && <ul>{children}</ul>;
}

function Item2({ children }) {
  return <li>{children}</li>;
}

FlyOut2.Toggle2 = Toggle2;
FlyOut2.List2 = List2;
FlyOut2.Item2 = Item2;
