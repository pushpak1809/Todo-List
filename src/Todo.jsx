import React from 'react'

const Todo = ({text,todo,settodo,todos}) => {


//Events

const deletetodo =()=>{
settodo(todo.filter((el)=>el.id !== todos.id))
};

const completetodo=()=>{
    settodo(todo.map((item)=>{

    if(item.id===todos.id){
        return{
            ...item,completed:!item.completed
        }
    }
    return item;
    }))
}

    return (
        <>
            <div className="todo">
                <li className={`todo-item  ${todos.completed?'completed':''}`}>{text}</li>
                <button onClick={completetodo} className='complete-btn'><i  className="fas fa-check"></i></button>
                <button  onClick={deletetodo} className='trash-btn'><i className="fas fa-trash"></i></button>
            </div>
        </>
    )
}

export default Todo;
