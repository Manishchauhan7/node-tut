//  npm -global commond, comes with node
//  npm --version
// local dependency-use it only in this particular projects
// npm i <packageName>
// npm install -g <packageName>
// npm initc(step by step)

//npm init -y(everything default) 
 

const _=require('lodash')
const items=[1,[2,[3,[4]]]]
const show=_.flattenDeep(items)
console.log(show)