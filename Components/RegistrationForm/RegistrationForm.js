import React from "react";
import useTeamForm from "../../hooks/useTeamForm";
import "./RegistrationForm.scss";

export default function RegistrationForm({ minPlayers, maxPlayers }) {
  const [initialValues, setInitialValues] = React.useState(
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
          <div key={i} className="RegForm__player">
            <div className="RegForm__row">
              <div className="RegForm__field">
                <label htmlFor={`PlayerName${i + 1}`}>
                  Player {i + 1} Name
                </label>
                <input
                  id={`PlayerName${i + 1}`}
                  type="text"
                  required
                  value={val[`PlayerName${i + 1}`]}
                  onChange={(e) => onChange(`PlayerName${i + 1}`, e, i)}
                />
              </div>
              <div className="RegForm__field">
                <label htmlFor={`PlayerEmail${i + 1}`}>
                  Player {i + 1} Email
                </label>
                <input
                  id={`PlayerEmail${i + 1}`}
                  type="text"
                  required
                  value={val[`PlayerEmail${i + 1}`]}
                  onChange={(e) => onChange(`PlayerEmail${i + 1}`, e, i)}
                />
              </div>
              <div className="RegForm__field">
                <label htmlFor={`PlayerPhone${i + 1}`}>
                  Player {i + 1} phone
                </label>
                <input
                  id={`PlayerPhone${i + 1}`}
                  type="text"
                  required
                  value={val[`PlayerPhone${i + 1}`]}
                  onChange={(e) => onChange(`PlayerPhone${i + 1}`, e, i)}
                />
              </div>
            </div>
            {i >= minPlayers && (
              <button onClick={() => removePlayer(i)}>Remove Player</button>
            )}

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
