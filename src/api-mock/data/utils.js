export function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
export function randomNumberFixed(min, max, factionDigits) {
  return (Math.random() * (max - min) + min).toFixed(factionDigits);
}
