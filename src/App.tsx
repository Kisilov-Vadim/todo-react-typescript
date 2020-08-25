import React, { useState, useEffect } from 'react';
import { NavBar } from './components/NavBar';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { ITodo } from './interfaces';

declare var confirm: (question: string) => boolean

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]); 

  useEffect(() => {
    const saved: ITodo[] = JSON.parse(localStorage.getItem('todos') || '[]');
    setTodos(saved);
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const addTodo = (todo: string):void => {
    const newTodo: ITodo = {
      title: todo,
      id: Date.now(), 
      completed: false
    }

    setTodos(prev => [newTodo, ...prev]); 
  };

  const toggleHandler = (id: number) => {
    let newTodos = todos.map(todo => {
      if (todo.id === id) {
        console.log(todo.completed)
        todo.completed = !todo.completed;
      }
      
      return todo
    })

    setTodos(newTodos); 
  };

  const removeHandler = (id: number) => {
    const shouldRemove = confirm('Вы уверены, что хотите удалить элемент?');
    if (shouldRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id));
    }
  }

  return (
    <>
      <NavBar />
      <div className="container">
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler} />
      </div>
    </>
  );
}

export default App;
