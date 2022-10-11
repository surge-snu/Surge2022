import React from "react";
import useAuth from "../../hooks/useAuth";
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
  const { tempTeamDetails } = useAuth();
  const [initialValues] = React.useState(
    tempTeamDetails
      ? tempTeamDetails
      : [...Array(minPlayers).keys()].map((item) => {
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
      }

      if (
        item[`PlayerPhone${index + 1}`] !== "" &&
        !isPhone(item[`PlayerPhone${index + 1}`])
      ) {
        tempErrors[`PlayerPhone${index + 1}`] = "Invalid Phone number";
      } else {
        const phone = item[`PlayerPhone${index + 1}`];
        let phoneCount = 0;

        formValues.forEach((item, i) => {
          if (
            item[`PlayerPhone${i + 1}`] !== "" &&
            item[`PlayerPhone${i + 1}`] === phone
          ) {
            phoneCount++;
          }
        });

        if (phoneCount > 1) {
          tempErrors[`PlayerPhone${index + 1}`] =
            "Phone Number should be unique";
        }
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
      eventId,
      validate,
      initialValues,
      onSubmit: async (formData) => {
        const hasError = Object.values(errors).some(
          (item) => Object.keys(item).length !== 0
        );
        console.log(errors);
        if (hasError) return;
        onSubmitForm(formData);
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
                  <button type="button" onClick={() => removePlayer(i)}>
                    Remove Player
                  </button>
                )}
              </span>
              <div className="RegForm__form--fields">
                <div className="RegForm__row">
                  <GInput
                    id={`PlayerName${i + 1}`}
                    label="Name"
                    type="text"
                    value={val[`PlayerName${i + 1}`]}
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
                    value={val[`PlayerEmail${i + 1}`]}
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
                    value={val[`PlayerPhone${i + 1}`]}
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
                    value={val[`PlayerID${i + 1}`]}
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
          {formData.length < maxPlayers && (
            <button onClick={() => addPlayer()}>Add player</button>
          )}
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
}
