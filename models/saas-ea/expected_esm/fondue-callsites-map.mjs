
//const fs = require('fs');
import * as fs from 'node:fs/promises';
import * as sourceMap from 'source-map';

//const sourceMap = require('source-map');

//let nodes = require('./cul_scope_0-babeled-fondued.js').__tracer.nodes();

//import {__tracer} from './cul_scope_0-babeled-fondued.js'
const i = await import('./cul_scope_0-babeled-fondued.js')//.__tracer;
const __tracer = i.default.__tracer;

let map_babel_raw = await fs.readFile('./cul_scope_0-babeled.js.map');
let map_babel = JSON.parse(map_babel_raw);
const consumer_babel = await new sourceMap.SourceMapConsumer(map_babel);

//console.log(consumer_fondue.originalPositionFor({ line: 2, column: 10 }));

const nodes_before_babel = __tracer.nodes().filter(d => d.type == 'callsite' && d.name != 'Object.defineProperty').map(d => ({
  ...d, nameEnd_before_babel: consumer_babel.originalPositionFor({line:d.nameEnd.line-1/*var exports = {}; line I add */,column:d.nameEnd.column})
  , nameStart_before_babel: consumer_babel.originalPositionFor({line:d.nameStart.line-1,column:d.nameStart.column})
}))
 
//console.log(nodes_before_babel);

////////////////////////////

let map_cul_raw = await fs.readFile('./cul_scope_0.mjs.map');
let map_cul = JSON.parse(map_cul_raw);
const consumer_cul = await new sourceMap.SourceMapConsumer(map_cul);

const nodes_before_cul = nodes_before_babel.map(d => ({
  ...d,
  nameEnd_before_cul: consumer_cul.originalPositionFor(d.nameEnd_before_babel),
  nameStart_before_cul: consumer_cul.originalPositionFor(d.nameStart_before_babel)
}))

console.log(nodes_before_cul);

//consumer_fondue.destroy();
