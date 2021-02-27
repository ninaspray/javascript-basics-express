const sayHello = string => {
  return ("Hello, " + string + "!");
};

const uppercase = string => {
  return string.toUpperCase();
};

//Remember to correclty input the Instance Method.

const lowercase = string => {
  return string.toLowerCase();
};

const countCharacters = string => {
  return string.length;
};

const firstCharacter = string => {
  return string.charAt(0);
};

const firstCharacters = (string, n) => {
  return string.slice(0, n);
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
