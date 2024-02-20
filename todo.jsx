import React from "react";


const todo = ({todo,removetodo, completetodo}) => {
    return (
        <div className="todo" 
          style = {{ textDecorantion: todo.isCompleted ? "line-through": "" }}>
        <div clasName="content">
          <p>{todo.text}</p>
          <p className="category">{(todo.category)}</p>
          </div>
          <div>
          <buttom className="complete" onClick = {() => completetodo(todo.id)}>completar</buttom>
          <buttom className="remove" onClick = {() => removetodo(todo.id)}>X</buttom>
        </div>
      </div>
    )
}

export default todo