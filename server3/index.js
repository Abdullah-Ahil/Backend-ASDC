const express = require('express');
const fs = require('fs')

const app =  express();

const port =  3000

let data = fs.readFileSync('./index.html')
app.listen(port,(error) =>{ 
    if(!error) 
        console.log("Server is Successfully Running,   and listening on port "+ port) 
    else 
        console.log("Error occurred, server can't start", error); 
    } )



app.get('/',(req,res)=>{
    res.send('get request ');
    res.end()
})


app.post('/',(req,res)=>{
    const {name} = req.body;
    res.send(`hi ${name}`)
    res.end()
})

app.put('/',(req,res)=>{
    res.send("put request ")
    res.end()
})

app.delete('/',(req,res)=>{
    res.send("delete request ")
    res.end()
});