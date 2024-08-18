import React,{ useEffect, useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState([{}])

  useEffect(() => {
    const fething = async () => {
      const res = await fetch("https://sum-server.100xdevs.com/todos")
      const ans = await res.json()
      setCount(ans.todos)
    }

    fething()
    
    const end = setInterval(fething, 2000)

    return () => clearInterval(end)
  }, [])

  return (
    <div>
      {count.map(item => <Todo key = {item.id} title = {item.title} description={item.description} completed = {item.completed ? "Completed" : "Pending"}/>)}
    </div>
  )
}

function Todo({title, description, completed}){
  return(
    <>
    <h1>{title}</h1>
    <p>{description}</p>
    <p style={{
      width:50,
      height:50
      }}>{completed}</p>
    </>
  )
}



export default App
