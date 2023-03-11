const path=require('path')
console.log(path.sep)



const filePath=path.join('/contet/','subfolder','file.txt')
console.log(filePath)


const base=path.basename(filePath)
console.log(base)