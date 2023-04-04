import _ from 'underscore'
import {fib} from './fibinacci_esm/cul_scope_0.mjs'

console.log(_.range(1,100+1).map(n_in => fib({n_in})))
