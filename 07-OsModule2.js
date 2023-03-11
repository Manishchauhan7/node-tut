//  OS Modules
const os=require('os')

// info about current user
const user=os.userInfo()
console.log(user) 
// methods returns the system uptime
const pc=os.uptime()
console.log(pc)
 const currentOs={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
 } 
 console.log(currentOs);