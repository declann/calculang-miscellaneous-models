"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.year = exports.subs_new = exports.subs_growth_pc = exports.subs_churned = exports.subs_churn_pc = exports.subs_0 = exports.subs = exports.revenue = exports.profit = exports.expenses = exports.CAC = void 0;
var subs_growth_pc = function subs_growth_pc(_ref) {
  var subs_growth_pc_in = _ref.subs_growth_pc_in;
  return subs_growth_pc_in;
};
exports.subs_growth_pc = subs_growth_pc;
var subs_churn_pc = function subs_churn_pc(_ref2) {
  var subs_churn_pc_in = _ref2.subs_churn_pc_in;
  return subs_churn_pc_in;
};
exports.subs_churn_pc = subs_churn_pc;
var subs_0 = function subs_0(_ref3) {
  var subs_0_in = _ref3.subs_0_in;
  return subs_0_in;
}; // subs at start of year 0
exports.subs_0 = subs_0;
var year = function year(_ref4) {
  var year_in = _ref4.year_in;
  return year_in;
};
exports.year = year;
var CAC = function CAC(_ref5) {
  var CAC_in = _ref5.CAC_in;
  return CAC_in;
};
exports.CAC = CAC;
var subs_new = function subs_new(_ref6) {
  var year_in = _ref6.year_in,
    subs_0_in = _ref6.subs_0_in,
    subs_churn_pc_in = _ref6.subs_churn_pc_in,
    subs_growth_pc_in = _ref6.subs_growth_pc_in;
  return (
    // its hard to find the year boundary needed here when I add expenses to model, when it worked without. Table and good error reporting is very important
    year({
      year_in: year_in
    }) < 0 ? 0 : subs({
      subs_0_in: subs_0_in,
      subs_growth_pc_in: subs_growth_pc_in,
      subs_churn_pc_in: subs_churn_pc_in,
      year_in: year({
        year_in: year_in
      }) - 1
    }) * (subs_growth_pc({
      subs_growth_pc_in: subs_growth_pc_in
    }) / 100)
  );
};
exports.subs_new = subs_new;
var subs_churned = function subs_churned(_ref7) {
  var year_in = _ref7.year_in,
    subs_0_in = _ref7.subs_0_in,
    subs_growth_pc_in = _ref7.subs_growth_pc_in,
    subs_churn_pc_in = _ref7.subs_churn_pc_in;
  return (subs({
    subs_0_in: subs_0_in,
    subs_growth_pc_in: subs_growth_pc_in,
    subs_churn_pc_in: subs_churn_pc_in,
    year_in: year({
      year_in: year_in
    }) - 1
  }) + subs_new({
    year_in: year_in,
    subs_0_in: subs_0_in,
    subs_churn_pc_in: subs_churn_pc_in,
    subs_growth_pc_in: subs_growth_pc_in
  })) * subs_churn_pc({
    subs_churn_pc_in: subs_churn_pc_in
  }) / 100;
}; // churn assumption also applies to new subs

// subs at end = prev subs at end + new subs@yr - churned subs@yr
exports.subs_churned = subs_churned;
var subs = function subs(_ref8) {
  var year_in = _ref8.year_in,
    subs_0_in = _ref8.subs_0_in,
    subs_growth_pc_in = _ref8.subs_growth_pc_in,
    subs_churn_pc_in = _ref8.subs_churn_pc_in;
  if (year({
    year_in: year_in
  }) < 0) return subs_0({
    subs_0_in: subs_0_in
  });else return subs({
    subs_0_in: subs_0_in,
    subs_growth_pc_in: subs_growth_pc_in,
    subs_churn_pc_in: subs_churn_pc_in,
    year_in: year({
      year_in: year_in
    }) - 1
  }) + subs_new({
    year_in: year_in,
    subs_0_in: subs_0_in,
    subs_churn_pc_in: subs_churn_pc_in,
    subs_growth_pc_in: subs_growth_pc_in
  }) - subs_churned({
    year_in: year_in,
    subs_0_in: subs_0_in,
    subs_growth_pc_in: subs_growth_pc_in,
    subs_churn_pc_in: subs_churn_pc_in
  });
}; // => can project subs given subs_0, growth and churn rates
exports.subs = subs;
var expenses = function expenses(_ref9) {
  var year_in = _ref9.year_in,
    subs_0_in = _ref9.subs_0_in,
    subs_churn_pc_in = _ref9.subs_churn_pc_in,
    subs_growth_pc_in = _ref9.subs_growth_pc_in,
    CAC_in = _ref9.CAC_in;
  return subs_new({
    year_in: year_in,
    subs_0_in: subs_0_in,
    subs_churn_pc_in: subs_churn_pc_in,
    subs_growth_pc_in: subs_growth_pc_in
  }) * CAC({
    CAC_in: CAC_in
  });
}; // error?
exports.expenses = expenses;
var revenue = function revenue(_ref10) {
  var year_in = _ref10.year_in,
    subs_0_in = _ref10.subs_0_in,
    subs_growth_pc_in = _ref10.subs_growth_pc_in,
    subs_churn_pc_in = _ref10.subs_churn_pc_in;
  return subs({
    year_in: year_in,
    subs_0_in: subs_0_in,
    subs_growth_pc_in: subs_growth_pc_in,
    subs_churn_pc_in: subs_churn_pc_in
  }) * 100;
};
exports.revenue = revenue;
var profit = function profit(_ref11) {
  var year_in = _ref11.year_in,
    subs_0_in = _ref11.subs_0_in,
    subs_growth_pc_in = _ref11.subs_growth_pc_in,
    subs_churn_pc_in = _ref11.subs_churn_pc_in,
    CAC_in = _ref11.CAC_in;
  return revenue({
    year_in: year_in,
    subs_0_in: subs_0_in,
    subs_growth_pc_in: subs_growth_pc_in,
    subs_churn_pc_in: subs_churn_pc_in
  }) - expenses({
    year_in: year_in,
    subs_0_in: subs_0_in,
    subs_churn_pc_in: subs_churn_pc_in,
    subs_growth_pc_in: subs_growth_pc_in,
    CAC_in: CAC_in
  });
};
exports.profit = profit;

function main() {
  console.log(profit({
    year_in: 3,
    subs_0_in: 100,
    subs_growth_pc_in: 10,
    subs_churn_pc_in: 10,
    CAC_in: 5
  }));
}

main()
