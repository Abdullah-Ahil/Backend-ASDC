const http = require('http');
const fs = require('fs');

let data = fs.readFileSync('./index.html')
const server = http.createServer(handler);

const port = 2000
server.listen(port,()=>{console.log('server running on port ',port)})


function handler(req,res){
    res.write(data)
    res.end()
}


console.log('first server')
console.log('first server',data)