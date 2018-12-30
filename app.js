const conversions = require('./conversions.js');

const convert = function(type, quantities) {

  // type should be a key in the conversions object
  // e.g. "weight", "mass", "length"

  // quantities should be an array
  // each element is an array of [quanity, unitName]
  // e.g. [[34.0,"acre"]]
  // e.g. [[16,"stone"],[7,"lbs"]]
  // if more than one element, their values are added together before conversion

  const conversionTable = conversions[type];
  const result = {};
  let accumulator = 0;

  // acummulate values

  quantities.forEach((token) => {
    const quantity = token[0];
    const units = token[1];
    const multiplier = conversionTable[units];
    const amount = multiplier * quantity;
    accumulator += amount;
    //console.log(`units: ${token}  ac:${accumulator}`);
  });

  // convert to each unit in the same category

  Object.keys(conversionTable).forEach((unitName) => {
    const unit = unitName;
    const conversion = conversionTable[unit];
    const amount2 = accumulator / conversion;
    result[unit] = amount2;
  });

  return result;
};

// parser
// takes string like
// "length 6 ft 3in"
// "area 200 km2"
// and converts to all possible units in that class

const parser = function(text) {
  // type is e.g. area, length
  const items = text.split(" ");
  let currAmount = 0.0;
  let currUnits = "";
  let stack = [];
  let elements = [];
  let alltokens = "";
  const type = items.shift(); // get first token as type
  // now parse rest. treat as pairs (amount, then unit name)
  items.forEach((token) => {
    let val;
    if (stack.length==0) {
      // expect a number
      val = parseFloat(token);
    } else {
      // should be unit name
      val = token;
    }
    stack.push(val);
    alltokens += `${val} `;
    // got two items? if so add to the final array
    if (stack.length===2) {
      const units = stack.pop();
      const amount = stack.pop();
      elements.push([amount,units]);
    }
  });
  // now have an array suitable for passing to the converter.
  let allConversions = convert(type, elements);

  console.log(`${alltokens}`);
  Object.keys(allConversions).forEach((unitName) => {
    console.log(`  = ${allConversions[unitName]} ${unitName}`)
  });
  console.log();
};

console.log("-------------------")
parser("mass 17 st 3 lbs");
parser("area 14 acre");
parser("length 5 ft 5 in");
parser("time 28 day 6 hr 42 min 12 s");
