import React from "react";
import TeamList from "./TeamList";

const TeamSelection = () => {
  return (
    <TeamList defaultTeam="barcelona">
      <ul>
        <TeamList.Team teamname="barcelona">FC Barcelona</TeamList.Team>
        <TeamList.Team teamname="madrid">Real Madrid</TeamList.Team>
        <TeamList.Team teamname="city">Manchester City</TeamList.Team>
        <TeamList.Team teamname="spurs">Tottenham</TeamList.Team>
      </ul>
    </TeamList>
  );
};

export default TeamSelection;
