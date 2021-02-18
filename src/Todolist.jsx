import React from 'react'
import Todo from './Todo'
const Todolist = ({ todo, settodo,filteredtodos }) => {
    return (
        <>
            <div className="todo-container">
                <ul className="todo-list">
                    {filteredtodos.map((todos) => (
                        <Todo
                            settodo={settodo}
                            todo={todo}
                            todos={todos}
                            key={todos.id}
                            text={todos.text} />
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Todolist;
