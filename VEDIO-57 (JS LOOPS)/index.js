console.log("Hello, Today we are going to study loop ");

let a=1;

for (let i = 0; i <100; i++) {
    console.log(a+i);
    
}

let obj ={
    Name: "Aman",
    Role: "Web Dev",
    Company:"Google"
}

for (const key in obj) {
    
        const element = obj[key];
        console.log(key, element);
        
    }
for (const c of "Harry") {
    console.log(c)
}

let i = 0;
while (i<60000) {
    console.log(i)
    i++;
}

let i = 10;
do {
    console.log(i)
    i++;
} while (i<6);
