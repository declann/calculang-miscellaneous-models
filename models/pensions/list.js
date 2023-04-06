var m = require('./pensions-calculator.introspection.json');
console.log(Object.values(m.cul_functions).filter(d => d.cul_scope_id == 0 && d.name.indexOf('$') == -1).map(d => d.name).join(','))