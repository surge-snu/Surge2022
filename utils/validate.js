const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const usernameRegex = /^[a-zA-Z_]\w{3,11}$/;

const passwordRegex = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*).*$/;

function createValidator(re) {
  return (candidate) => re.test(candidate);
}

export const isEmail = createValidator(emailRegex);
export const isUsername = createValidator(usernameRegex);
export const isPassword = createValidator(passwordRegex);
