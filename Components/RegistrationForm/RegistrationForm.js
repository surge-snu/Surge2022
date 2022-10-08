import React from "react";
import useTeamForm from "../../hooks/useTeamForm";
import { isEmail, isName, isPhone, isRollNumber } from "../../utils/validate";
import GInput from "../GInput/GInput";
import "./RegistrationForm.scss";

export default function RegistrationForm({
  minPlayers,
  maxPlayers,
  eventId,
  onSubmitForm,
}) {
  const [initialValues] = React.useState(
    [...Array(minPlayers).keys()].map((item) => {
      const tempObj = {
        [`PlayerName${item + 1}`]: "",
        [`PlayerEmail${item + 1}`]: "",
        [`PlayerPhone${item + 1}`]: "",
        [`PlayerID${item + 1}`]: "",
        playerType: item + 1 === 1 ? "CAPTAIN" : "PLAYER",
        eventId: eventId,
      };
      return tempObj;
    })
  );

  async function validate(formValues) {
    const errs = {};

    formValues.forEach((item, index) => {
      const tempErrors = {};

      if (
        item[`PlayerName${index + 1}`] !== "" &&
        !isName(item[`PlayerName${index + 1}`])
      ) {
        tempErrors[`PlayerName${index + 1}`] = "Invalid Name";
      }

      if (
        item[`PlayerEmail${index + 1}`] !== "" &&
        !isEmail(item[`PlayerEmail${index + 1}`])
      ) {
        tempErrors[`PlayerEmail${index + 1}`] = "Invalid Email";
      } else {
        const email = item[`PlayerEmail${index + 1}`];
        let emailCount = 0;

        formValues.forEach((item, i) => {
          if (
            item[`PlayerEmail${i + 1}`] !== "" &&
            item[`PlayerEmail${i + 1}`] === email
          ) {
            emailCount++;
          }
        });

        if (emailCount > 1) {
          tempErrors[`PlayerEmail${index + 1}`] = "Email should be unique";
        }
      }

      if (
        item[`PlayerPhone${index + 1}`] !== "" &&
        !isPhone(item[`PlayerPhone${index + 1}`])
      ) {
        tempErrors[`PlayerPhone${index + 1}`] = "Invalid Phone number";
      }

      if (
        item[`PlayerID${index + 1}`] !== "" &&
        !isRollNumber(item[`PlayerID${index + 1}`])
      ) {
        tempErrors[`PlayerID${index + 1}`] = "Invalid Roll Number";
      } else {
        const rollNumber = item[`PlayerID${index + 1}`];
        let rollNumberCount = 0;
        formValues.forEach((item, i) => {
          if (
            item[`PlayerID${i + 1}`] !== "" &&
            item[`PlayerID${i + 1}`] === rollNumber
          ) {
            rollNumberCount++;
          }
        });

        if (rollNumberCount > 1) {
          tempErrors[`PlayerID${index + 1}`] = "Roll Number should be unique";
        }
      }

      errs[index] = tempErrors;
    });

    return errs;
  }

  const { formData, onChange, handleSubmit, errors, addPlayer, removePlayer } =
    useTeamForm({
      validate,
      initialValues,
      onSubmit: async (formData) => {
        const hasError = Object.values(errors).some(
          (item) => Object.keys(item).length !== 0
        );
        if (hasError) return;

        const teamMembers = formData.map((member, index) => {
          return {
            name: member[`PlayerName${index + 1}`],
            email: member[`PlayerEmail${index + 1}`],
            phone: member[`PlayerPhone${index + 1}`],
            rollNumber: member[`PlayerID${index + 1}`],
            playerType: member.playerType,
            eventId: member.eventId,
          };
        });
        onSubmitForm(teamMembers);

        // const team = await registerTeam({
        //   teamDetails: {
        //     registeredById: user.id,
        //     eventId: eventId,
        //     email: user.email,
        //   },
        //   teamMembers: teamMembers,
        // });
      },
    });

  return (
    <div className="RegForm">
      <form method="POST" className="RegForm__form" onSubmit={handleSubmit}>
        <div className="RegForm__form--fieldsList">
          {formData.map((val, i) => (
            <div key={i} className="RegForm__form--player">
              <span>
                <h3>
                  Player {i + 1} {i + 1 === 1 ? "(Captain)" : ""}
                </h3>
                {i >= minPlayers && (
                  <button onClick={() => removePlayer(i)}>Remove Player</button>
                )}
              </span>
              <div className="RegForm__form--fields">
                <div className="RegForm__row">
                  <GInput
                    id={`PlayerName${i + 1}`}
                    label="Name"
                    type="text"
                    setValue={(e) => onChange(`PlayerName${i + 1}`, e, i)}
                  />
                  {errors[i] && errors[i][`PlayerName${i + 1}`] && (
                    <span className="RegForm__row--error">
                      {errors[i][`PlayerName${i + 1}`]}
                    </span>
                  )}
                </div>
                <div className="RegForm__row">
                  <GInput
                    id={`PlayerEmail${i + 1}`}
                    label="Email"
                    type="text"
                    setValue={(e) => onChange(`PlayerEmail${i + 1}`, e, i)}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  />
                  {errors[i] && errors[i][`PlayerEmail${i + 1}`] && (
                    <span className="RegForm__row--error">
                      {errors[i][`PlayerEmail${i + 1}`]}
                    </span>
                  )}
                </div>
                <div className="RegForm__row">
                  <GInput
                    id={`PlayerPhone${i + 1}`}
                    label="Phone"
                    type="tel"
                    setValue={(e) => onChange(`PlayerPhone${i + 1}`, e, i)}
                  />
                  {errors[i] && errors[i][`PlayerPhone${i + 1}`] && (
                    <span className="RegForm__row--error">
                      {errors[i][`PlayerPhone${i + 1}`]}
                    </span>
                  )}
                </div>
                <div className="RegForm__row">
                  <GInput
                    id={`PlayerID${i + 1}`}
                    label="Roll Number"
                    type="text"
                    setValue={(e) => onChange(`PlayerID${i + 1}`, e, i)}
                  />
                  {errors[i] && errors[i][`PlayerID${i + 1}`] && (
                    <span className="RegForm__row--error">
                      {errors[i][`PlayerID${i + 1}`]}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="SignUp__button">
          <button type="submit">Next</button>
          {/* TODO: Fix delete player */}
          {formData.length < maxPlayers && (
            <button onClick={() => addPlayer()}>Add player</button>
          )}
        </div>
      </form>
    </div>
  );
}
