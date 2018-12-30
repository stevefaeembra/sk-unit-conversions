const convert = require('./conversions.js');

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
  let elementsCopy = elements.slice(0);
  let allConversions = convert(type, elements);

  console.log(`${elementsCopy}`);

  return {
    input: elementsCopy,
    conversions: allConversions
  };
};

module.exports = parser;