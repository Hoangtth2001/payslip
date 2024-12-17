export interface IResponseList<T> {
  status: boolean;
  content: T;
  message?: string;
}

export const formatDate = (isoString: string) => {
  const date = new Date(isoString);
  return new Intl.DateTimeFormat('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(date);
};

export function formatCurrencyVND(amount: number) {
  if (isNaN(amount)) return '0₫'; // Kiểm tra nếu giá trị không phải là số
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0, // Không có phần thập phân
  }).format(amount);
}
