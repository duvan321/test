const randomStrings = require("../index");


describe("probar funciionalidades de randomString",()=>{
    test("probar la funcionalidad", () => {
        expect(typeof (randomStrings())).toBe("string");
      });
      test("probar queno existe una ciudad",()=>{
        expect(randomStrings()).not .toMatch(/cordoba/)
      })
})


const randomAnimals = require("../index");

describe("Probar funcionalidades de randomAnimals", () => {
  test("Probar la funcionalidad", () => {
    expect(typeof randomAnimals()).toBe("string");
  });
  test("Probar que no existe un animal", () => {
    expect(randomAnimals()).not.toMatch(/🦓/);
  });
});