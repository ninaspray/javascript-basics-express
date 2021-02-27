const createPerson = (name, age) => {
  return {
    name: name,
    age: age
  };
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  return person.age > 65
};

const getAges = people => {
  return people.map(person => person.age);
};

//Why person?

const findByName = (name, people) => {
  return people.find(obj => obj.name === name);
};

const findHondas = cars => {
  return cars.filter(obj => obj.manufacturer === "Honda");
};
//Was using find then map but it was filter

const averageAge = people => {
  const totalAge = people.reduce((prevAge, currentPerson) => {
    return prevAge + currentPerson.age;
  }, 0);

  return totalAge / people.length;
};
//I did have something completely different to the above found on the cheat sheet! 
//understand concept of how to get the averge but how to pull the objects.. 

const createTalkingPerson = (name, age) => {
  return {
    name: name,
    age: age,
    introduce: strangersName => {
      return `Hi ${strangersName}, my name is ${name} and I am ${age}!`;
    }
  };
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
