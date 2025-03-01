import { useState,useEffect} from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [cards, setCards] = useState([])

  const fetchData = async()=>{
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await a.json()
    setCards(data)
    console.log(data)
  }

  useEffect(() => {
    fetchData()
  }, [])
  

  return (
    <>
    <Navbar/>
      <div className="container">
        {cards.map((card)=>{
          return <div key={cards.id} className="card">
            <h1>{card.title}</h1>
            <p>{card.body}</p>
            <span>ByUserId:{card.userId}</span>
            </div>
        })}
        
      </div>
    </>
  )
}

export default App
