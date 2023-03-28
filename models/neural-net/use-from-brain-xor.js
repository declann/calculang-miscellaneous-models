const n = require('./from-brain-xor.js').n;


console.log(n({layer_in:0,id_in:0,input_in:[0,0]}));
console.log(n({layer_in:0,id_in:1,input_in:[0,0]}));
console.log(n({layer_in:1,id_in:0,input_in:[0,0]}));
console.log(n({layer_in:1,id_in:1,input_in:[0,0]}));
console.log(n({layer_in:1,id_in:2,input_in:[0,0]}));
console.log(n({layer_in:2,id_in:0,input_in:[0,0]}));

console.log('-----\ntests:')

console.log(n({layer_in:2,id_in:0,input_in:[0,0]}));
console.log(fromBrainJsFunction([0,0])[0]) // tiny error
console.log(n({layer_in:2,id_in:0,input_in:[0,1]}));
console.log(fromBrainJsFunction([0,1])[0]) // tiny error
console.log(n({layer_in:2,id_in:0,input_in:[1,0]}));
console.log(fromBrainJsFunction([1,0])[0]) // tiny error
console.log(n({layer_in:2,id_in:0,input_in:[1,1]}));
console.log(fromBrainJsFunction([1,1])[0]) // tiny error

// see json file .function
function fromBrainJsFunction(input
    ) {
    return [1/(1+1/Math.exp((-3.7264750003814697-8.397997856140137*1/(1+1/Math.exp((2.241621255874634-5.988633632659912*(input[0]||0)-5.968584060668945*(input[1]||0))))+6.283421039581299*1/(1+1/Math.exp((4.789311408996582-3.1702933311462402*(input[0]||0)-3.4785501956939697*(input[1]||0))))+2.6879982948303223*1/(1+1/Math.exp((1.7653114795684814-1.856601357460022*(input[0]||0)-1.284184217453003*(input[1]||0)))))))];
    }