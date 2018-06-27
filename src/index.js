// Create a function which stores a number. Return an inner function which accepts a number as an argument, adds it to the number in parent scope and returns the new total

function increase() {
  let number = 5;

  function inner(newNumber) {
    number = newNumber + number;
    return number;
  }

  return inner;
}

function double() {
  let number = 4;

  function inner() {
    number = number * 2;
    return number;
  }

  return inner;
}

function total(numberIn) {
  let number = numberIn;

  function inner(arrNumbers) {
    number = arrNumbers.reduce((acc, item) => {
      return (acc = acc + item);
    }, number);
    return number;
  }
  return inner;
}

function gibberish() {
  let emptyStr = "";

  function inner(strOrArrStrs) {
    if (typeof strOrArrStrs === "string") {
      emptyStr = `${emptyStr} ${strOrArrStrs}`;
    } else if (Array.isArray(strOrArrStrs)) {
      strOrArrStrs.map(mouse => (emptyStr = `${emptyStr} . ${mouse}`));
    }
    return emptyStr;
  }
  return inner;
}

function mergeSort() {
  let emptyArr = [];

  function inner(number) {
    const numIsObj = { [number]: "" };
    emptyArr.map(item => (numIsObj[item] = { [item]: "" }));
    emptyArr = [...Object.keys(numIsObj)];
    return emptyArr[emptyArr.length - 1];
  }
  return inner;
}

function calculator() {
  let total;

  function inner(numA, numB, operator) {
    switch (operator) {
      case "+":
        total = numA + numB;
        return total;

      case "-":
        total = numA - numB;
        return total;

      case "*":
        total = numA * numB;
        return total;

      case "/":
        total = numA / numB;
        return total;

      default:
        return "Camel says no";
    }
  }
  return inner;
}

function dogHome() {
  const allTheDogs = {};

  return {
    houseDog(dogToAdd) {
      allTheDogs[dogToAdd.location]
        ? (allTheDogs[dogToAdd.location] = [
            ...allTheDogs[dogToAdd.location],
            dogToAdd
          ])
        : (allTheDogs[dogToAdd.location] = [dogToAdd]);
      return allTheDogs;
    },
    getDogsByLoaction(dogLocation) {
      return allTheDogs[dogLocation];
    }
  };
}

module.exports = {
  increase,
  double,
  total,
  gibberish,
  mergeSort,
  calculator,
  dogHome
};
