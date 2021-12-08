import React from "react";
import axios from "axios";
import { BASE_URL } from "../../../constants/astromatch-api";

import Heart from "../../../assets/image/heart.png";
import Cancel from "../../../assets/image/cancel.png";

import {
  ImgPersonProfile,
  ChoiceButtons,
  InfoPerson,
} from "../styles/StyledChooseScreen";

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
        props.getMatches();
        if (res.data.isMatch === true) {
          props.messageArea.fire({
            title: `Você e ${props.peopleProfile.name} acabaram de dar um Match!`,
            background: "#eeffde",
          });
        }
      })
      .catch((err) => {
        props.messageArea.fire({ title: err.message, icon: "error" });
        props.getProfileToChose();
      });
  };

  const renderPeopleProfile = (
    <div>
      {props.peopleProfile ? (
        <div>
          <ImgPersonProfile image={props.peopleProfile.photo}>
            <section>
              <img
                src={props.peopleProfile.photo}
                alt={props.peopleProfile.name}
              />
            </section>
          </ImgPersonProfile>
          <InfoPerson>
            <h2>
              {props.peopleProfile.name}, <span>{props.peopleProfile.age}</span>
            </h2>
            <p>{props.peopleProfile.bio}</p>
          </InfoPerson>
          <ChoiceButtons>
            <button
              onClick={() => {
                choosePerson(false);
              }}
            >
              <img src={Cancel} alt="Botão de recusar" />
            </button>
            <button
              onClick={() => {
                choosePerson(true);
              }}
            >
              <img src={Heart} alt="Botão de like" />
            </button>
          </ChoiceButtons>
        </div>
      ) : (
        <div>
          <h2> Espera que alguém já vai te amar...</h2>
        </div>
      )}
    </div>
  );

  return <div>{renderPeopleProfile}</div>;
}
