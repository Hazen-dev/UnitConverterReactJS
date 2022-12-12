export function CountToMeter(unit, val) {
  if (unit === "Miles") {
    return Math.floor(countArgorythms.lenght.fromMiles(val));
  } else if (unit === "Foots") {
    return Math.floor(countArgorythms.lenght.fromFoots(val));
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
      return arg * 3.2;
    },
    toMiles: (arg) => {
      return arg / 1609;
    },
    toFoots: (arg) => {
      return arg / 3.2;
    },
  },
};
