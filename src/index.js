const cities = [
  "ciudad de mexico",
  "bogota",
  "lima",
  "buenos aires",
  "guadadjara",
];
const randomString = () => {
  const string = cities[Math.floor(Math.random() * cities.length)];
  return string;
};

const animals = [
    "🐶",
    "🐱",
    "🐭",
    "🐹",
    "🐰",
    "🐻",
    "🐼",
    "🐨",
    "🐯",
    "🦁",
    "🐮",
    "🐷"
  ];
  
  const randomAnimal = () => {
    const animal = animals[Math.floor(Math.random() * animals.length)];
    return animal;
  };
  const reverseString2 = (str) => {
    return new Promise((resolve, reject) => {
      if (!str) {
        reject(Error("Error"));
      }
      resolve(str.split("").reverse().join(""));
    });
  };

  //recoradar para instalar el coverage*npm test -- --coverage*
  module.exports = randomAnimal;

module.exports = randomString