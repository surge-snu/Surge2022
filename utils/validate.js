const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const usernameRegex = /^[a-zA-Z_]\w{3,11}$/;

const nameRegex = /^[a-zA-Z ]{3,20}$/;

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