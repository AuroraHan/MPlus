export const getRandomNumberByRange = (start: number, end: number) => {
  return Math.round(Math.random() * (end - start) + start);
};

export const sum = (x: number, y: number) => {
  return x + y;
};

export const square = (x: number) => {
  return x * x;
};
