module.exports = {
  purify : item => JSON.parse(JSON.stringify(item)),
  getNum : str => {return isNaN(parseFloat(str))?"NULL":parseFloat(str)},
  saveStr: str => {

  }
};

var a = /[~'!@#$%^&*()\\{}|\-+_=:\/\s]/