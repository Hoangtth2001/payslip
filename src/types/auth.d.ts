export interface LoginRequest {
  email: string;
  password: string;
  employeeId: string;
}

export interface LoginResponse {
  employeeId: string;
  email: string;
  name: string;
  position: string;
}

export interface IOption {
  value: string;
  label: string;
}

export interface StaffInfor {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  position: string; //chức vụ
  gender: string;
  employeeId: string;
  basicSalary: string; //lương cơ bản
  allowance: string; // phụ cấp
  role: string;
}

export interface AuthUserResponse {
  employeeId: string;
  name: string;
  position: string;
  gender: string;
  basicSalary: number;
  allowance: number;
  email: string;
  password: string;
  role: 'admin' | 'staff';
  _id: string;
}

export interface ICreateLeaveRequest {
  employeeId: string;
  name: string;
  reason?: string;
  startDate: string;
  endDate: string;
}
export interface ILeavesByIDResponse {
  employeeId: string;
  name: string;
  position: string;
  leaveDays?: {
    reason?: string;
    startDate: string;
    endDate: string;
  }[];
}

export interface IAllPayslip {
  employeeId: string;
  name: string;
  position: string;
  payrolls: IPayslip[];
}

export interface IPayslip {
  month: string;
  basicSalary: number | string;
  allowance: string;
  totalSalary: string;
  netSalary: string;
  workDays: string;
  leaveDays: string;
  unpaidLeave: string;
  bhxh: string;
}
