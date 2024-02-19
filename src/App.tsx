import { useEffect, useState } from 'react'
import './App.css'
import FieldText from './components/Input'
import { Todo, useStorage } from './hooks/useStorage'
import TodoItem from './components/TodoItem'

function App() {
  const [list, setList] = useState([])
  const [todo, setTodo] = useState('')
  const { setItem, getItems } = useStorage()

  const handlerClickAdd = () => {
    setItem({todo, done: false})
    window.location.reload()
  }

  useEffect(() => {
    getLit()
  }, [])

  const getLit = () => {
    const list = getItems()
    setList(list)
  }

  return (
    <>
    <h1>Todo List</h1>
      <div>
        <h4>Adicionar todo</h4>
        <div><FieldText value={todo} onChange={(ev) => setTodo(ev.target.value)} /> <button onClick={handlerClickAdd}>+</button></div>
      </div>
      <div>
        {
          list?.map((t: Todo) =>(
            <div>
              <TodoItem  {...t}/>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
