// this maps unit names onto their categories
// (mass, weight, length etc.)

const types = {

  mi: "length",
  km: "length",
  fur: "length",
  dm: "length",
  ftm: "length",
  m: "length",
  ft: "length",
  in: "length",
  cm: "length",
  mm: "length",

  mi2 : "area",
  km2 : "area",
  ha: "area",
  footballpitch: "area",
  acre: "area",
  perch: "area",
  m2 : "area",
  sqft : "area",

  st: "mass",
  kg: "mass",
  lbs: "mass",
  g: "mass",
  cwt: "mass",
  tonne: "mass",

  ms: "time",
  s: "time",
  min: "time",
  hr: "time",
  day: "time",
  year: "time",
  donniedarko: "time",

  l : "volume",
  ml: "volume",
  floz: "volume",
  gill: "volume",
  pint: "volume",
  quart: "volume",
  gallon: "volume",

};

module.exports = types;
