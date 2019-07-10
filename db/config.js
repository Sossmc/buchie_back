const config = num=>{
  let arr=['ZXlKb2IzTjBJam9pTVRBeExqRXpNaTR4TXpVdU1U' +
    'TXlJaXdpY0c5eWRDSTZJak0yTXpZaUxDSjFjMlZ5SWpvaWMyOXpjMj' +
    'FqSWl3aWNHRnpjM2R2Y21RaU9pSlBibU5sVjJGek5VQnNhbmt1WTI5' +
    'dElpd2laR0YwWVdKaGMyVWlPaUp2YkdSaWIyOXJJbjA9',
    'ZXlKb2IzTjBJam9pTVRBeExqRXpNaTR4TXpVdU1U' +
    'TXlJaXdpY0c5eWRDSTZJak0yTXpZaUxDSjFjMlZ5SWpvaWMyOXpjMj' +
    'FqSWl3aWNHRnpjM2R2Y21RaU9pSlBibU5sVjJGek5VQnNhbmt1WTI5' +
    'dElpd2laR0YwWVdKaGMyVWlPaUppZFdOb2FXVWlmUT09',
    'ZXlKb2IzTjBJam9pTVRJM0xqQXVNQzR4SWl3aWNHOXlkQ0k2SWpNMk' +
    '16WWlMQ0oxYzJWeUlqb2ljMjl6YzIxaklpd2ljR0Z6YzNkdmNtUWlP' +
    'aUpQYm1ObFYyRnpOVUJzYW5rdVkyOXRJaXdpWkdGMFlXSmhjMlVpT2' +
    'lKaWRXTm9hV1VpZlE9PQ=='
  ];
  const tb = str => Buffer.from(str, 'base64').toString();
  const tw = str => Buffer.from(str,"ascii").toString("base64");
  return JSON.parse(tb(tb(arr[num])));
};
module.exports = config(1);