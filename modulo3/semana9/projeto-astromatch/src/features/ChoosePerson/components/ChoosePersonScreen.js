import React from "react";
import axios from "axios";
import { BASE_URL } from "../../../constants/astromatch-api";

import Heart from "../../../assets/image/heart.png"
import Cancel from "../../../assets/image/cancel.png"

import { ImgPersonProfile, ChoiceButtons, InfoPerson } from '../styles/StyledChooseScreen'

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
      <ImgPersonProfile image={props.peopleProfile.photo}>
        <section>
          <img src={props.peopleProfile.photo} alt={props.peopleProfile.name} />
        </section>
      </ImgPersonProfile>
      <InfoPerson>
        <h2>
          {props.peopleProfile.name}, <span>{props.peopleProfile.age}</span>
        </h2>
        <p>{props.peopleProfile.bio}</p>
      </InfoPerson>
      <ChoiceButtons>
        <button onClick={() => {choosePerson(false)}}><img src={Cancel} alt="Botão de recusar" /></button>
        <button onClick={() => {choosePerson(true)}}><img src={Heart} alt="Botão de like" /></button>
      </ChoiceButtons>
    </div>
  );

  return (
    <div>
    { props.peopleProfile ? (
      <div>
        {renderPeopleProfile}
      </div>
    ) : (
      <div>
        <h2> O amor é paciente</h2>
      </div>
    )} 
    </div>
  );
}
