export function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
export function randomNumberFixed(min, max, factionDigits) {
  return (Math.random() * (max - min) + min).toFixed(factionDigits);
}

const alphabet = 'abcdefghijklmnpqourstxyz0123456789'.split('');
export function randomString(length) {
  let str = '';
  for (let i = 0; i< length; i++) {
    let randomChar = alphabet[Math.floor(Math.random() * alphabet.length)];
    str += randomChar;
  }
  return str;
}
