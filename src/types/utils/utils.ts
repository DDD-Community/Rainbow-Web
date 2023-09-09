export const addCommasToNumber = (number: number): string => number.toLocaleString("ko-KR");

export const extractNumeric = (str: string): string => str.replace(/[^\d]/g, "");
