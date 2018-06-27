const {
  increase,
  double,
  total,
  gibberish,
  mergeSort,
  calculator,
  dogHome
} = require("../src/index.js");

test("increase", function() {
  const arg = 10;
  const inner = increase();
  const result = inner(arg);

  const expected = 15;

  expect(result).toBe(expected);
});

test("double", function() {
  const inner = double();
  expect(inner()).toBe(8);
  expect(inner()).toBe(16);
  expect(inner()).toBe(32);
});

test("total", function() {
  const inner = total(5);
  expect(inner([2, 3, 1])).toEqual(11);
  expect(inner([2, 3, 1])).toEqual(17);
});

test("gibberish", function() {
  const inner = gibberish();
  expect(inner("camel")).toEqual(" camel");
  expect(inner("camel")).toEqual(" camel camel");
  expect(inner(["potato", "camel"])).toEqual(" camel camel . potato . camel");
  expect(inner("phoebe")).toEqual(" camel camel . potato . camel phoebe");
});

test("mergeSort", function() {
  const inner = mergeSort();
  expect(inner(6)).toEqual("6");
  expect(inner(9)).toEqual("9");
  expect(inner(1)).toEqual("9");
});

test("calculator", function() {
  const inner = calculator();
  expect(inner(2, 3, "?")).toBe("Camel says no");
  expect(inner(2, 3, "+")).toBe(5);
  expect(inner(2, 3, "-")).toBe(-1);
  expect(inner(2, 3, "/")).toBe(0.6666666666666666);
  expect(inner(2, 3, "*")).toBe(6);
});

// test.skip("dogHome", function() {
//   const inner = dogHome();
//   const expected = {
//     Shoreditch: [{ dog: {}, doga: {} }]
//   };
//   const spotTheDog = {
//     name: "Spot",
//     breed: "Camel",
//     colour: "camel",
//     location: "Shoreditch"
//   };
//   const sportTheDog = {
//     name: "Sport",
//     breed: "Camel",
//     colour: "camel",
//     location: "Cornwal"
//   };

//   expect(inner({ spotTheDog, sportTheDog })).toBe(expected);
// });

test("dogHome", function() {
  const { houseDog, getDogsByLoaction } = dogHome();
  const expected = [
    {
      name: "Spot",
      breed: "Camel",
      colour: "camel",
      location: "Shoreditch"
    }
  ];

  const spotTheDog = {
    name: "Spot",
    breed: "Camel",
    colour: "camel",
    location: "Shoreditch"
  };
  const sportTheDog = {
    name: "Sport",
    breed: "Camel",
    colour: "camel",
    location: "Cornwal"
  };
  houseDog(spotTheDog);
  houseDog(sportTheDog);
  houseDog(sportTheDog);
  houseDog(sportTheDog);

  expect(getDogsByLoaction("Shoreditch")).toEqual(expected);
});
