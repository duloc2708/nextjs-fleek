import Bn from "bignumber.js";
import { compose } from "ramda";
import { format, fromUnixTime } from "date-fns";

const timeFormat = "MMMM do HH:MM:ss";
const formatDate = (targetFormat) => (date) => format(date, targetFormat);
const toMilitaryTime = formatDate(timeFormat);
const formatUnixTimestamp = compose(toMilitaryTime, fromUnixTime);

const shiftBigNumber = (decimals) => (bigNumber) =>
  bigNumber.shiftedBy(decimals);
const shiftNumberByEight = shiftBigNumber(-8);
const toFixedNumber = (fixedPoint) => (number) => number.toFixed(fixedPoint);
const toTensPlace = toFixedNumber(2);

const formatBigNumber = (x) => new Bn(x);

// const testNumber = "39554000000";

const trace = (label) => (val) => {
  console.log(`${label}::`, val);
  return val;
};

const formatBigNumberFn = compose(
  toTensPlace,
  shiftNumberByEight,
  formatBigNumber
); //?

const getLatestTimestamp = (oracle) => {
  return oracle.methods.latestTimestamp().call({}, (error, res) => {
    if (error != null) {
      console.log(error);
      return;
    }
    return res;
  });
};

export { formatBigNumberFn, formatUnixTimestamp, getLatestTimestamp };
