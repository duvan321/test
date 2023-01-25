//para los string
const text = "hola Mundo";
test("debe tener un Texto", () => {
  expect(text).toMatch(/Mundo/);
});
//para los arrays
const fruits = ["manzana", "melon", "banana"];

test("¿debe contener una banana?", () => {
  expect(fruits).toContain("banana");
});

//para number
test("Mayor que", () => {
  expect(10).toBeGreaterThan(9);
});

//para boleanos
test("Verdadero", () => {
  expect(true).toBeTruthy();
});

//para probar con callback

const reverseString = (str, callback) => {
  callback(str.split("").reverse().join(""));
};

test("probar un callback", () => {
  reverseString("Hola", (str) => {
    expect(str).toBe("aloH");
  });
});

//para promesas
const reverseString2 = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error("Error"));
    }
    resolve(str.split("").reverse().join(""));
  });
};
test("probar una promesa", () => {
  return reverseString2("Hola").then((string) => {
    expect(string).toBe("aloH");
  });
});

// para probar async/wait
test("probar async/wait", async () => {
  const string = await reverseString2("Hola");
  expect(string).toBe("aloH");
});

//despues de cada prueba
//afterEach(() => console.log("despues de cada prueba"));
//despues de todas las pruebas
//afterAll(() => console.log("despues de todas las pruebas"));

//beforeEach(() => console.log("Antes de cada prueba"));

//beforeAll(() => console.log("Antes de todas las pruebas"));
