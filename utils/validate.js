const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const usernameRegex = /^[a-zA-Z_]\w{3,11}$/;

const nameRegex = /^[a-zA-Z ]{3,40}$/;

const passwordRegex = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*).*$/;

const phoneRegex = /^\d{10}$/;

const rollNumberRegex = /^[a-zA-Z0-9]{3,20}$/;

function createValidator(re) {
  return (candidate) => re.test(candidate);
}

export const isEmail = createValidator(emailRegex);
export const isUsername = createValidator(usernameRegex);
export const isPassword = createValidator(passwordRegex);
export const isPhone = createValidator(phoneRegex);
export const isName = createValidator(nameRegex);
export const isRollNumber = createValidator(rollNumberRegex);
