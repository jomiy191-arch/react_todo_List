import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const [items, setItems] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim() === '') return
    setItems([...items, text])
    setText('')
  }

  const handleDelete = (index) => {
    const newItems = items.filter((_, i) => i !== index)
    setItems(newItems)
  }

  return (
    <>
      <div className="app">
        <h1 className="title">Todo List</h1>

        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nimadur kiriting"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="input"
          />
          <button type="submit" className="btn">
            Qo‘shish
          </button>
        </form>

        <ul className="list">
          {items.map((item, index) => (
            <li key={index} className="list-item">
              <span>{item}</span>
              <button onClick={() => handleDelete(index)} className="delete-btn">
                O'chirish
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
