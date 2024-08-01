import fs from "fs/promises"

let a = await fs.readFile("Aman.txt")
let b = await fs.appendFile("Aman.txt",
"\n\n\n\ This is amazing promise")

console.log(a.toString(),b)
