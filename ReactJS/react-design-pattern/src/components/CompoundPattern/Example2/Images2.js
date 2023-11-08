import React from "react";
import FlyOutMenu2 from "./FlyOutMenu2";

const sources = [
  "https://images.pexels.com/photos/939478/pexels-photo-939478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/1692984/pexels-photo-1692984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/162829/squirrel-sciurus-vulgaris-major-mammal-mindfulness-162829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];

function Image2({ source }) {
  return (
    <div>
      <img src={source} alt="img" />
      <FlyOutMenu2 />
    </div>
  );
}

export default function ImageList2() {
  return sources.map((source, index) => <Image2 source={source} key={index} />);
}
