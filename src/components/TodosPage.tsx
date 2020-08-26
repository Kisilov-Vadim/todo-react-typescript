import React, { useState, useEffect } from 'react';
import { ITodo } from '../interfaces';
import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList'

declare var confirm: (question: string) => boolean

export const TodosPage: React.FC = () => {
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
      <TodoForm addTodo={addTodo} />
      <TodoList 
        todos={todos} 
        onToggle={toggleHandler} 
        onRemove={removeHandler} 
      />
    </>
  )
}
