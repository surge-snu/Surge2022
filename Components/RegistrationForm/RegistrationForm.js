import React from "react";
import useTeamForm from "../../hooks/useTeamForm";
import { registerTeam } from "../../operations/event.fetch";
import GInput from "../GInput/GInput";
import "./RegistrationForm.scss";

export default function RegistrationForm({
  minPlayers,
  maxPlayers,
  eventId,
  setTeamDetails,
  user,
}) {
  const [initialValues] = React.useState(
    [...Array(minPlayers).keys()].map((item) => {
      const tempObj = {
        [`PlayerName${item + 1}`]: "",
        [`PlayerEmail${item + 1}`]: "",
        [`PlayerPhone${item + 1}`]: "",
        playerType: item + 1 === 1 ? "CAPTAIN" : "PLAYER",
        eventId: eventId,
      };
      return tempObj;
    })
  );

  async function validate(formValues) {
    // TODO: Add these validations
    // 1. Check if all the fields are filled
    // 2. Check if all the emails are valid
    // 3. Check if all the phone numbers are valid
    // 4. Check if all the names are valid
    // 5. Check if all the emails are unique
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
        // rename all PlayerName1, PlayerEmail1, PlayerPhone1 to name, email, phone
        const teamMembers = formData.map((member, index) => {
          return {
            name: member[`PlayerName${index + 1}`],
            email: member[`PlayerEmail${index + 1}`],
            phone: member[`PlayerPhone${index + 1}`],
            playerType: member.playerType,
            eventId: member.eventId,
          };
        });
        // setTeamDetails(teamMembers);

        const team = await registerTeam({
          teamDetails: {
            registeredById: user.id,
            eventId: eventId,
            email: user.email,
          },
          teamMembers: teamMembers,
        });

        console.log(team);
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
                type="text"
                setValue={(e) => onChange(`PlayerEmail${i + 1}`, e, i)}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
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
          <button type="submit">Register</button>
          &nbsp;&nbsp;
          {formData.length < maxPlayers && (
            <button onClick={() => addPlayer()}>Add player</button>
          )}
        </div>
      </form>
    </div>
  );
}
