export function CountToMeter(unit, val) {
  if (unit === "Miles") {
    return Math.floor(countArgorythms.lenght.fromMiles(val));
  } else if (unit === "Foots") {
    return Math.floor(countArgorythms.lenght.fromFoots(val));
  } else {
    return Math.floor(val * 1);
  }
}
export function CountToKilograms(unit, val) {
  console.log(unit);
  if (unit === "Pounds") {
    return Math.floor(countArgorythms.weight.fromPounds(val));
  } else if (unit === "Ounces") {
    return Math.floor(countArgorythms.weight.fromOunces(val));
  } else {
    return Math.floor(val * 1);
  }
}
export const countArgorythms = {
  lenght: {
    fromMiles: (arg) => {
      return arg * 1609;
    },
    fromFoots: (arg) => {
      return arg / 3.2;
    },
    toMiles: (arg) => {
      return arg / 1609;
    },
    toFoots: (arg) => {
      return arg * 3.2;
    },
  },
  weight: {
    fromPounds: (arg) => {
      return arg * 0.453;
    },
    fromOunces: (arg) => {
      return arg * 0.0283;
    },
    toFoots: (arg) => {
      return arg * 2.20462;
    },
    toMiles: (arg) => {
      return arg * 35.27396;
    },
  },
};
