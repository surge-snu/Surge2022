import useTeamForm from '../../hooks/useTeamForm';
import './RegistrationForm.scss';

export default function RegistrationForm({
	minPlayers,
	optionalPlayers,
}) {
	
	// const initialValues = [...Array(minPlayers).keys()].map(
	// 	(i) => `Player${i + 1}`
	// );
	// generate three fields for each player player1 name, player1 email, player1 phone
	// const initialValues = [...Array(minPlayers).keys()].map(
	// 	(i) => `PlayerName${(i + 1)}`
	// ).push(...[...Array(optionalPlayers).keys()].map(
	// 	(i) => `PlayerEmail${(i + 1)}`
	// )).push(...[...Array(optionalPlayers).keys()].map(
	// 	(i) => `PlayerPhone${(i + 1)}`
	// ));
	
	const initialValues = [...Array(minPlayers).keys()].map((item => {
		const tempObj = {
			[`PlayerName${(item + 1)}`]: '',
			[`PlayerEmail${(item + 1)}`]: '',
			[`PlayerPhone${(item + 1)}`]: '',
		}
		return tempObj;
	}))
	
	// console.log(initialValues);
	
	async function validate(formValues) {
		const errs = {};
		// formValues.forEach((val, i) => {
		// 	if (!val) {
		// 		errs[i] = 'Required';
		// 	}
		// });
		return errs;
	}
	
	const { formData, onChange, handleSubmit, errors } = useTeamForm({
    validate,
    initialValues,
    onSubmit: async (formData) => {
      console.log(formData);
    },
	});
	
	return (
		<div className="RegForm">
			{/* {
				initialValues
			} */}
			<form method='POST' className="RegForm__form" onSubmit={handleSubmit}>
				{formData.map((val, i) => (
					<div key={i} className="RegForm__player">
						<div class="RegForm__row">
							<div class="RegForm__field">
								<label htmlFor={`PlayerName${i + 1}`}>Player {i + 1} Name</label>
								<input
									id={`PlayerName${i + 1}`}
									type='text'
									required
									onChange={(e) => onChange(`PlayerName${i + 1}`, e,i)}
								/>
							</div>
							<div class="RegForm__field">
								<label htmlFor={`PlayerEmail${i + 1}`}>Player {i + 1} Email</label>
								<input
									id={`PlayerEmail${i + 1}`}
									type='text'
									required
									onChange={(e) => onChange(`PlayerEmail${i + 1}`, e, i)}
								/>
							</div>
							<div class="RegForm__field">
								<label htmlFor={`PlayerPhone${i + 1}`}>Player {i + 1} phone</label>
								<input
									id={`PlayerPhone${i + 1}`}
									type='text'
									required
									onChange={(e) => onChange(`PlayerPhone${i + 1}`, e, i)}
								/>
							</div>
						</div>
						{errors[i] && <span className='RegForm--error'>{errors[i]}</span>}
					</div>
				))}
				<div className="SignUp__button">
          <button type="submit">Register</button>
        </div>
			</form>
		</div>
	);
}