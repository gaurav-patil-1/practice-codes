import React, { useState } from "react";

export default function withHover3(Element) {
  return (props) => {
    const [hovering, setHovering] = useState(false);
    return (
      <Element
        {...props}
        hovering={hovering}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      />
    );
  };
}
