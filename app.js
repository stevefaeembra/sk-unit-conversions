const conversions = require('./conversions.js');


const convert = function(type, quantities) {

  // pass in array of array [quantity, unit] e.g.
  // [[1.5,"in"]]
  // [[6,"stone"],[7,"lbs"]]
  // if more that one item, will be accumulated in an accumulator

  const conversionTable = conversions[type];
  const result = {};
  let accumulator = 0;

  quantities.forEach((token) => {
    const quantity = token[0];
    const units = token[1];
    const multiplier = conversionTable[units];
    const amount = multiplier * quantity;
    accumulator += amount;
    console.log(`units: ${token}  ac:${accumulator}`);
  });

  Object.keys(conversionTable).forEach((unitName) => {
    const unit = unitName;
    const conversion = conversionTable[unit];
    const amount2 = accumulator / conversion;
    result[unit] = amount2;
  });

  return result;
};

// some examples

let c = convert("length",[[1.0,"ft"], [3.0,"in"]]);
console.log(c);

c = convert("area",[[22.0,"acre"]]);
console.log(c);

c = convert("mass",[[17.0,"st"],[3.5,"lbs"]])
console.log(c);
