export type RouterPathKey =
  | 'LOGIN'
  | 'REGISTER'
  | 'HOME'
  | 'HOMETAB'
  | 'ACCOUNT'
  | 'NOTIFICATION'
  | 'ADDSTAFF'
  | 'PAYSLIP'
  | 'LEAVE'
  | 'VIEWLEAVE';

export type RouterPathValue =
  | 'Login'
  | 'Register'
  | 'Home'
  | 'HomeTab'
  | 'Account'
  | 'Notification'
  | 'AddStaff'
  | 'payslip'
  | 'leave'
  | 'viewLeave';

export type RouterPath = { [key in RouterPathKey]: RouterPathValue };
