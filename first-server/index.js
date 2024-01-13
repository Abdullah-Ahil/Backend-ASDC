const express = require('express');
// const fs = require('fs');
const app = express();
// let data = fs.readFileSync('./index.html');
const port = 1000;

app.get('/', (req, res) => {
    res.send('hello world');
})

app.listen = (port,()=>{
    console.log(`Server is running on port ${port}`)
})
console.log(`Server is running on port ${port}`)