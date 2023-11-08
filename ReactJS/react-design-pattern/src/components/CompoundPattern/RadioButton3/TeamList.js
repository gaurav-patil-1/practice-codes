import React, { useState } from "react";

function TeamList(props) {
  const [team, setTeam] = useState(props.defaultTeam);
  return (
    <div>
      {React.Children.map(props.children, (child) => {
        return React.cloneElement(child, { team, setTeam });
      })}
    </div>
  );
}

function Team(props) {
  console.log(`props.setTeam : ${props.setTeam}`); //undefined
  console.log(`props.team : ${props.team}`); //undefined
  return (
    <li>
      <input
        type="radio"
        name="options"
        value={props.name}
        checked={props.name === props.myOption}
        onChange={() => props.setMyOption(props.name)}
      />

      {props.children}
    </li>
  );
}

TeamList.Team = Team;
export default TeamList;
