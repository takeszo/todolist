import { useState } from 'react'

import Todo from "./componentes/todo";

import todoform from "./componentes/todoform";

import "./App.css";


function App() {
  const [todos, settodos] = useState([
    {
      id: 1,
      text: "criar funcionalidade x no sistema",
      category: "trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "ir para a academia",
      category: "pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "estudar 2h React",
      category: "estudos",
      isCompleted: false,
    },

  ])


  const addtodo = (text, category) => {
    const newtodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ]

    settodos(newtodos);

  };

    const removetodo =(id) => {
      const newtodos= [...todos]
      const filteredtodos = newtodos.filter ((todo)=> 
        todo.id !== id? todo: null
       );
       settodos(filteredtodos);

    }

    const completetodo =(id) => {
      const newtodos =[...todos]
      newtodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted: todo)
      settodos(newtodos);

    }

    
  return (
    <div className="app">
      <h1> Lista de Tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <todo key={todo.id} todo={todo}  removetodo= {removetodo}
          completetodo = {completetodo}/>
        ))}
      </div>
      <todoform addtodo={addtodo} />
    </div>
  )

}



export default App;
