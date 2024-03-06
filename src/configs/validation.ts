export const REGEX_CONSTANTS = {
  REGEX_PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]*$/,
  REGEX_EMAIL: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
  REGEX_NUMBER: /^\d+$/,
  REGEX_NUMBER_AND_DECIMAL: /^[1-9]\d*(\.\d+)?$/,
  REGEX_PHONE_NUMBER:
    /^((\+([1-9]{1,2})?[-. ]?(\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})))|(((0[1-9]{1}){1})[0-9-. ]{8,12}))$/g,
  REGEX_SPECIAL_CHARACTERS: /^[_a-zA-Z0-9\s\d]*$/,
  REGEX_SPECIAL_CHARACTERS_NOT_SPACE: /^[_a-zA-Z0-9\d]*$/,
  REGEX_NO_NUMBER: /^[^\d]*$/,
  REGEX_NAME: /^[a-zA-Z0-9().,&:;@_ -]+$/,
};
