import { Todo, useStorage } from '../../hooks/useStorage'
import './styles.css'

export default function TodoItem ({todo, done}: Todo) {

  const { toggleIsDone, removeItem } = useStorage()
  return (
    <div className="todo-item">
      <p className={done ? 'is-done': ''}>{todo}</p>
      <div>
        <button className='button' onClick={() => toggleIsDone(todo)}> OK! </button>
        <button onClick={() => removeItem({todo, done})}><span className="fluent-mdl2--remove-from-trash"></span> </button>  
      </div>
    </div>
  )
}