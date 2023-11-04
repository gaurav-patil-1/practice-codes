import React from "react";
import useHover4 from "./useHover4";
import withLoader4 from "./withLoader4";

function DogImages(props) {
  const [hoverRef, hovering] = useHover4();
  return (
    <div ref={hoverRef}>
      {hovering && <div id="hover">Hovering</div>}
      <div>
        {props.data.message.map((url, index) => {
          return <img src={url} key={index} alt="img" />;
        })}
      </div>
    </div>
  );
}

export default withLoader4(
  DogImages,
  "https://dog.ceo/api/breed/labrador/images/random/6"
);
