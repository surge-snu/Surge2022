import { useState } from "react";
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
  const [initialValues] = useState(
    tempTeamDetails
      ? tempTeamDetails
      : [...Array(maxPlayers).keys()].map((item) => {
          const tempObj = {
            id: item,
            [`PlayerName`]: "",
            [`PlayerEmail`]: "",
            [`PlayerPhone`]: "",
            [`PlayerID`]: "",
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

      if (item[`PlayerName`] !== "" && !isName(item[`PlayerName`])) {
        tempErrors[`PlayerName`] = "Invalid Name";
      }

      if (item[`PlayerEmail`] !== "" && !isEmail(item[`PlayerEmail`])) {
        tempErrors[`PlayerEmail`] = "Invalid Email";
      }

      if (item[`PlayerPhone`] !== "" && !isPhone(item[`PlayerPhone`])) {
        tempErrors[`PlayerPhone`] = "Invalid Phone number";
      } else {
        const phone = item[`PlayerPhone`];
        let phoneCount = 0;

        formValues.forEach((item, i) => {
          if (item[`PlayerPhone`] !== "" && item[`PlayerPhone`] === phone) {
            phoneCount++;
          }
        });

        if (phoneCount > 1) {
          tempErrors[`PlayerPhone`] = "Phone Number should be unique";
        }
      }

      if (item[`PlayerID`] !== "" ) {
        tempErrors[`PlayerID`] = "Invalid Roll Number";
      } else {
        const rollNumber = item[`PlayerID`];
        let rollNumberCount = 0;
        formValues.forEach((item, i) => {
          if (item[`PlayerID`] !== "" && item[`PlayerID`] === rollNumber) {
            rollNumberCount++;
          }
        });

        if (rollNumberCount > 1) {
          tempErrors[`PlayerID`] = "Roll Number should be unique";
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
        if (hasError) return;
        onSubmitForm(formData);
      },
    });

  return (
    <div className="RegForm">
      <form method="POST" className="RegForm__form" onSubmit={handleSubmit}>
        <div className="RegForm__form--fieldsList">
          {formData.map((val, i) => (
            <div key={val["id"]} className="RegForm__form--player">
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
                    id={`PlayerName`}
                    label="Name*"
                    type="text"
                    value={val[`PlayerName`]}
                    setValue={(e) => onChange(`PlayerName`, e, i)}
                  />
                  {errors[i] && errors[i][`PlayerName`] && (
                    <span className="RegForm__row--error">
                      {errors[i][`PlayerName`]}
                    </span>
                  )}
                </div>
                <div className="RegForm__row">
                  <GInput
                    id={`PlayerEmail`}
                    label="Email*"
                    type="text"
                    pattern={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/}
                    value={val[`PlayerEmail`]}
                    setValue={(e) => onChange(`PlayerEmail`, e, i)}
                  />
                  {errors[i] && errors[i][`PlayerEmail`] && (
                    <span className="RegForm__row--error">
                      {errors[i][`PlayerEmail`]}
                    </span>
                  )}
                </div>
                <div className="RegForm__row">
                  <GInput
                    id={`PlayerPhone`}
                    label="Phone*"
                    type="tel"
                    value={val[`PlayerPhone`]}
                    setValue={(e) => onChange(`PlayerPhone`, e, i)}
                  />
                  {errors[i] && errors[i][`PlayerPhone`] && (
                    <span className="RegForm__row--error">
                      {errors[i][`PlayerPhone`]}
                    </span>
                  )}
                </div>
                <div className="RegForm__row">
                  <GInput
                    id={`PlayerID`}
                    label="Roll Number*"
                    pattern={null}
                    type="text"
                    value={val[`PlayerID`]}
                    setValue={(e) => onChange(`PlayerID`, e, i)}
                  />
                  {errors[i] && errors[i][`PlayerID`] && (
                    <span className="RegForm__row--error">
                      {errors[i][`PlayerID`]}
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
          <button
            type="submit"
            disabled={Object.values(errors).some(
              (item) => Object.keys(item).length !== 0
            )}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
