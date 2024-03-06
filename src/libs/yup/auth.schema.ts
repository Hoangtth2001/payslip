import * as yup from 'yup';

import { REGEX_CONSTANTS } from 'configs/validation';
import { VALIDATE_MESSAGES } from 'configs/message';

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .matches(REGEX_CONSTANTS.REGEX_EMAIL, VALIDATE_MESSAGES.INVALID_EMAIL)
    .required(VALIDATE_MESSAGES.REQUIRED),
  password: yup
    .string()
    .matches(REGEX_CONSTANTS.REGEX_PASSWORD, VALIDATE_MESSAGES.INVALID_PASSWORD_SPECIAL_CHAR)
    .required(VALIDATE_MESSAGES.REQUIRED),
});
