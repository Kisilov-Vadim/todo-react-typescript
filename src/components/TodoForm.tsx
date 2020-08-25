import React, { useState } from 'react'

interface TodoFormProps {
  addTodo(todo: string): void
}

export const TodoForm: React.FC<TodoFormProps> = ({addTodo}) => {
  const [title, setTitle] = useState<string>(''); 
  // const ref = useRef<HTMLInputElement>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  const keyPressHandler = (e: React.KeyboardEvent) => { 
    if (e.key === "Enter") {
      addTodo(title);
      setTitle('') 
    } 
  }

  return (
    <div className="input-field mt2">
      <input 
        type="text" 
        id="title" 
        placeholder="Введите название дела"
        value={title}
        // ref={ref}
        onChange={changeHandler}
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">Введите название дела</label>
    </div>
  )
}
