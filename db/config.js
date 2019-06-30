const config = num=>{
  let arr=['ZXlKb2IzTjBJam9pTVRBeExqRXpNaTR4TXpVdU1U' +
    'TXlJaXdpY0c5eWRDSTZJak0yTXpZaUxDSjFjMlZ5SWpvaWMyOXpjMj' +
    'FqSWl3aWNHRnpjM2R2Y21RaU9pSlBibU5sVjJGek5VQnNhbmt1WTI5' +
    'dElpd2laR0YwWVdKaGMyVWlPaUp2YkdSaWIyOXJJbjA9',
    'ZXlKb2IzTjBJam9pTVRBeExqRXpNaTR4TXpVdU1U' +
    'TXlJaXdpY0c5eWRDSTZJak0yTXpZaUxDSjFjMlZ5SWpvaWMyOXpjMj' +
    'FqSWl3aWNHRnpjM2R2Y21RaU9pSlBibU5sVjJGek5VQnNhbmt1WTI5' +
    'dElpd2laR0YwWVdKaGMyVWlPaUppZFdOb2FXVWlmUT09'];
  const tb = str => Buffer.from(str, 'base64').toString();
  return JSON.parse(tb(tb(arr[num])));
};
module.exports = config(0);