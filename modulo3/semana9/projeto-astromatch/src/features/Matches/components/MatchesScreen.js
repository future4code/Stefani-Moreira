import React, { useEffect } from "react";

import {
  ImgPersonMatches,
  MatchesContainer,
  NoMatchesContainer
} from "../styles/StyledMatchesPage";

export default function MatchesScreen(props) {
  useEffect(() => {
    props.getMatches();
  });

  const renderMatches = props.matches.map((person) => {
    return (
      <div key={person.id}>
        <ImgPersonMatches>
          <img src={person.photo} alt={person.name} />
        </ImgPersonMatches>
        <li>{person.name}</li>
      </div>
    );
  });

  return (
    <main>
    
      {props.matches.length > 0 ? (
        <div>
          <details>
              <summary>...</summary>
              <button onClick={props.clearMatches}>Limpar matches</button>
          </details>
          <MatchesContainer>{renderMatches}</MatchesContainer>
        </div>
      ) : (
        <NoMatchesContainer>
          <iframe
            src="https://giphy.com/embed/iGpkO05xWTl17Vhq6Y"
            class="giphy-embed"
            allowFullScreen
            title="Alguém solitário"
          ></iframe>
          <h2>O amor é paciente, uma hora chega alguém.</h2>
        </NoMatchesContainer>
      )}
    </main>
  );
}
