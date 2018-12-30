const conversions = {
  length: {
    // base unit is m
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
    // base unit is m2
    m2 : 1.0,
    ha: 10000.0, // hectare
    footballpitch: 7140,
    acre: 4046.8564224,
    km2 : 1000000.0,
    mi2 : 2589988.110336,
    sqft : .09290304, // square foot
  },
  mass: {
    // base unit is kg
    st: 6.350293,
    kg: 1.0,
    lbs: 0.4535923,
    g: 0.001,
  },
  time: {
    // base unit is secs (s)
    ms: 0.001,
    s: 1.0,
    min: 60.0,
    hr: 3600.0,
    day: 86400.0,
    year: 365.0*86400.0,
    donniedarko: 2443332,
  }
};

module.exports = conversions;
