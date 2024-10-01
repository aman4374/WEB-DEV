import Navbar from "@/component/Navbar";
import fs from "fs/promises"
// import { useState,useEffect } from "react";

export default function Home() {
  // const [count, setCount] = useState(0)
  console.log("Hey I am Harry")
  let a = fs.readFile(".gitignore")
  a.then(e=>{console.log(e.toString())})
  return (
    <div>
      <Navbar />
      I am component
      {/* {count}
      <button onClick={() => setCount(count + 1)}>Click me</button> */}
    </div>
  );
}
