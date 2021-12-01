import React from "react";
import axios from "axios";
import { BASE_URL } from "../../../constants/astromatch-api";

import ImgPersonProfile from '../styles/StyledChooseScreen'

export default function ChoosePersonScreen(props) {
  const choosePerson = (chosen) => {
    const body = {
      id: props.peopleProfile.id,
      choice: chosen,
    };
    axios
      .post(`${BASE_URL}/choose-person`, body)
      .then((res) => {
        props.getProfileToChose();
        if (res.data.isMatch === true) {
          alert(
            ` Você e ${props.peopleProfile.name} acabaram de dar um Match! 😍😍😍`
            // EXEMPLO TINDER: foto do usuário - novo match. Toque para falar com nome do usuário
          );
        }
      })
      .catch((err) => {
        alert(err.message);
        props.getProfileToChose();
      });
  };

  const renderPeopleProfile = (
    <div>
      <ImgPersonProfile src={props.peopleProfile.photo} alt={props.peopleProfile.name} />
      <p>
        {props.peopleProfile.name}, {props.peopleProfile.age}
      </p>
      <p>{props.peopleProfile.bio}</p>
      <button onClick={() => {choosePerson(false)}}>x</button>
      <button onClick={() => {choosePerson(true)}}>❤</button>
    </div>
  );

  return (
    <div>
      {renderPeopleProfile}
    </div>
  );
}
