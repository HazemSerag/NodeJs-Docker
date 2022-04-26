const express = require("express");

const app = express();

const PORT = process.env.PORT || 8085;


app.use('/:name', (req,res,next)=> {
    console.log(req.params.name)
    res.send(`<h1>${req.params.name}</h1>`)
})

app.use('/', (req,res,next)=> {
    console.log('Hello from Index')
    res.send("<h1>Main Page</h1>")
})

console.log("APP Running")
app.listen(PORT);
