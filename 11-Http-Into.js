const http=require('http');
const server=http.createServer((req,res)=>{
   if(req.url==='/')
   {
       res.end('Welcome to our HomePage')
      
   }
   if(req.url==='/about')
{
   res.end('Welcome It is About Page')
}
res.end(
 '  <h1>Opps!</h1>'
   )
})
server.listen(5000)