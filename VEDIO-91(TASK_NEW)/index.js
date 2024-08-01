import fs from "fs/promises"
import fs from "fs"
import fs from "path"

const basepath = "C:\\Users\\Aman Trivedi\\Documents\\WEB DEV\\VEDIO-91(TASK_NEW)"

let files = await fs.readdir(basepath)
console.log(files)


let extension =[]
for (const items of files) {
    let ext = item.split(".")[item.split(".").length -1]
    console.log(ext)
    if(fsync.existSync(path.join(basepath,ext))){
        // move the file to this directory
        fs.rename(path.join(basepath,item),path.join(basepath,ext,path))
    }
    else{
        fs.mkdir(exit)
    }
console.log(items)
}