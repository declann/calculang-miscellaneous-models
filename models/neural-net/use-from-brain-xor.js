const n = require('./from-brain-xor.js').n;


console.log(n({layer_in:0,id_in:0,input_in:[0,0]}));
console.log(n({layer_in:0,id_in:1,input_in:[0,0]}));
console.log(n({layer_in:1,id_in:0,input_in:[0,0]}));
console.log(n({layer_in:1,id_in:1,input_in:[0,0]}));
console.log(n({layer_in:1,id_in:2,input_in:[0,0]}));
console.log(n({layer_in:2,id_in:0,input_in:[0,0]}));

console.log('-----\ntests:')

console.log(n({layer_in:2,id_in:0,input_in:[0,0]}));
console.log(n({layer_in:2,id_in:0,input_in:[0,1]}));
console.log(n({layer_in:2,id_in:0,input_in:[1,0]}));
console.log(n({layer_in:2,id_in:0,input_in:[1,1]}));