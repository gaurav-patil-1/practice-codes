import React from "react";
import withHover3 from "./withHover3";
import withLoader3 from "./withLoader3";

function DogImages3(props) {
  return (
    <div {...props}>
      {props.hovering && <div id="hover">Hovering!</div>}
      <div>
        {props.data.message.map((url, index) => {
          return <img src={url} key={index} alt="img" />;
        })}
      </div>
    </div>
  );
}

export default withHover3(
  withLoader3(DogImages3, "https://dog.ceo/api/breed/labrador/images/random/6")
);
