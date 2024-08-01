const express = require("express")
const app = express()
const port = 3000;

app.use(express.static("public"))

app.get('/', (req, res) => {
  console.log("Hey its a get request")
  res.send("Hello World !")
})

app.post('/', (req, res) => {
  console.log("Hey its a Post request")
  res.send('Hello world Post')
})

app.get("/index",(req,res)=>{
  console.log("hey its index")
  res.sendFile('templates/index.html',{root:__dirname})
})

app.get("/api",(req,res)=>{
  
  res.json({a:1,b:2,c:3,d:4})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
