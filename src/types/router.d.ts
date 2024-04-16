export type RouterPathKey =
  | 'LOGIN'
  | 'REGISTER'
  | 'HOME'
  | 'HOMETAB'
  | 'FAVOURITE'
  | 'ACTIVITIES'
  | 'ACCOUNT'
  | 'NOTIFICATION'
  | 'MYFIELDS'
  | 'ADDFIELDSGROUP';

export type RouterPathValue =
  | 'Login'
  | 'Register'
  | 'Home'
  | 'HomeTab'
  | 'Favourite'
  | 'Activities'
  | 'Account'
  | 'Notification'
  | 'MyFields'
  | 'AddFieldsGroup';

export type RouterPath = { [key in RouterPathKey]: RouterPathValue };
