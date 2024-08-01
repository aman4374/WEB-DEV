const fs = require("fs")
console.log(fs)

console.log("Start")
// fs.writeFileSync("aman.txt","Aman is a good boy")
fs.writeFile("Aman2.txt","Aman2 is a good boy",()=>{
    console.log("done")
    fs.readFile("Aman2.txt",(error,data)=>{
        console.log(error,data.toString())
    })
})
fs.appendFile("Aman.txt","Aman Robo",(e,d)=>){
    console.log(d)
}
console.log("Ending")