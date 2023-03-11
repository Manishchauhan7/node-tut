// Fs module (Sync)
// or we can write in another way
// const fs=require('fs')
// fs.readFileSync()


const {readFileSync,writeFileSync}=require('fs')
const first=readFileSync('./content/first.txt','utf8')
const second=readFileSync('./content/Second.txt','utf8')

console.log(first,second)
 
writeFileSync('./content/result-sync.txt','here is the result: ${first}')