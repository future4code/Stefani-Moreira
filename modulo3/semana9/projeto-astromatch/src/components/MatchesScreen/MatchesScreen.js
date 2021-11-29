import React, { useEffect } from "react";

export default function MatchesScreen(props) {
  useEffect(() => {
    props.getMatches()
  });

  const renderMatches = props.matches.map((person) => {
    return (
      <div key={person.id}>
        <img src={person.photo} alt={person.name} />
        <li>{person.name}</li>
      </div>
    );
  });

  return (
    <div>
      <button onClick={props.getMatches}>Mostrar Matches</button>
      {renderMatches}
    </div>
  );
}
