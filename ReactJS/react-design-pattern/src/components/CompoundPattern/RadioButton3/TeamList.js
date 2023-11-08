import React, { useState } from "react";

function TeamList(props) {
  const [team, setTeam] = useState(props.defaultTeam);
  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        {React.Children.map(props.children, (child) => {
          return React.cloneElement(child, { team, setTeam });
        })}
      </ul>
    </div>
  );
}

function Team(props) {
  return (
    <li>
      <input
        type="radio"
        name="options"
        value={props.name}
        checked={props.team === props.teamname}
        onChange={() => props.setTeam(props.teamname)}
      />

      {props.children}
    </li>
  );
}

TeamList.Team = Team;
export default TeamList;
