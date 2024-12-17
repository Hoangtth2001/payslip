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
  employeeId: yup.string().required(VALIDATE_MESSAGES.REQUIRED),
});
export const addStaffSchema = yup.object().shape({
  email: yup
    .string()
    .matches(REGEX_CONSTANTS.REGEX_EMAIL, VALIDATE_MESSAGES.INVALID_EMAIL)
    .required(VALIDATE_MESSAGES.REQUIRED),
  password: yup
    .string()
    .matches(REGEX_CONSTANTS.REGEX_PASSWORD, VALIDATE_MESSAGES.INVALID_PASSWORD_SPECIAL_CHAR)
    .required(VALIDATE_MESSAGES.REQUIRED),
  confirmPassword: yup
    .string()
    .matches(REGEX_CONSTANTS.REGEX_PASSWORD, VALIDATE_MESSAGES.INVALID_PASSWORD_SPECIAL_CHAR)
    .oneOf([yup.ref('password')], VALIDATE_MESSAGES.PASSWORDS_DO_NOT_MATCH)
    .required(VALIDATE_MESSAGES.REQUIRED),

  name: yup.string().required(VALIDATE_MESSAGES.REQUIRED),
  position: yup.string().required(VALIDATE_MESSAGES.REQUIRED),
  gender: yup.string().required(VALIDATE_MESSAGES.REQUIRED),
  employeeId: yup.string().required(VALIDATE_MESSAGES.REQUIRED),
  basicSalary: yup.string().required(VALIDATE_MESSAGES.REQUIRED),
  allowance: yup.string().required(VALIDATE_MESSAGES.REQUIRED),
  role: yup.string().required(VALIDATE_MESSAGES.REQUIRED),
});
export const createLeaveRequestSchema = yup.object().shape({
  employeeId: yup.string().required(VALIDATE_MESSAGES.REQUIRED),
  name: yup.string().required(VALIDATE_MESSAGES.REQUIRED),
  endDate: yup.string().required(VALIDATE_MESSAGES.REQUIRED),
  startDate: yup.string().required(VALIDATE_MESSAGES.REQUIRED),
  reason: yup.string(),
});
