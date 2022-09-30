import React from "react";
import useTeamForm from "../../hooks/useTeamForm";
import GInput from "../GInput/GInput";
import "./RegistrationForm.scss";

export default function RegistrationForm({ minPlayers, maxPlayers }) {
  const [initialValues] = React.useState(
    [...Array(minPlayers).keys()].map((item) => {
      const tempObj = {
        [`PlayerName${item + 1}`]: "",
        [`PlayerEmail${item + 1}`]: "",
        [`PlayerPhone${item + 1}`]: "",
      };
      return tempObj;
    })
  );

  async function validate(formValues) {
    const errs = {};
    formValues.forEach((val, i) => {
      if (!val) {
        errs[i] = "Required";
      }
    });
    return errs;
  }

  const { formData, onChange, handleSubmit, errors, addPlayer, removePlayer } =
    useTeamForm({
      validate,
      initialValues,
      onSubmit: async (formData) => {
        console.log(formData);
      },
    });

  return (
    <div className="RegForm">
      <form method="POST" className="RegForm__form" onSubmit={handleSubmit}>
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
              <GInput
                id={`PlayerName${i + 1}`}
                label="Name"
                type="text"
                setValue={(e) => onChange(`PlayerName${i + 1}`, e, i)}
              />
              <GInput
                id={`PlayerEmail${i + 1}`}
                label="Email"
                type="email"
                setValue={(e) => onChange(`PlayerEmail${i + 1}`, e, i)}
              />
              <GInput
                id={`PlayerPhone${i + 1}`}
                label="Phone"
                type="tel"
                setValue={(e) => onChange(`PlayerPhone${i + 1}`, e, i)}
              />
            </div>

            {errors[i] && <span className="RegForm--error">{errors[i]}</span>}
          </div>
        ))}
        <div className="SignUp__button">
          <button type="submit" onClick={() => console.log(formData)}>
            Register
          </button>
          &nbsp;&nbsp;
          {formData.length < maxPlayers && (
            <button onClick={() => addPlayer()}>Add player</button>
          )}
        </div>
      </form>
    </div>
  );
}
