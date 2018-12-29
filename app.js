const conversions = {
  length: {
    // base unit is meters
    mi: 1609.344, // mile
    km: 1000.0,
    fur: 201.168, // furlong
    dm: 10.0,
    ftm: 1.8288, // fathom
    m: 1.0,
    ft: 0.3048,
    in: 0.0254,
    cm: 0.01,
    mm: 0.001
  },
  area: {
    m2 : 1.0,
    ha: 10000.0, // hectare
    acre: 4046.8564224,
    km2 : 1000000.0,
    mi2 : 2589988.110336,
    sqft : .09290304, // square foot
  }
}

const convert = function(type, quantities) {
  // pass in type, key used in conversions e.g. length, mass, time
  // pass in array of array [quantity, unit] e.g.
  // [[1.5,"in"]]
  // [[3,"hours"],[12,"mins"],[3,"secs"]]
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

let c = convert("length",[[1.0,"ft"], [3.0,"in"]]);
console.log(c);

c= convert("area",[[22.0,"acre"]]);
console.log(c);
