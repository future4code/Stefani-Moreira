import React, { useEffect } from "react";

import ImgPersonMatches from '../styles/StyledMatchesPage'

export default function MatchesScreen(props) {
  useEffect(() => {
    props.getMatches();
  });

  const renderMatches = props.matches.map((person) => {
    return (
      <div key={person.id}>
        <ImgPersonMatches src={person.photo} alt={person.name} />
        <li>{person.name}</li>
      </div>
    );
  });

  return (
    <div>
      
      {renderMatches}
    </div>
  );
}
