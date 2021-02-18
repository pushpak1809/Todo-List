import React, { useState, useEffect } from 'react';
import Form from './Form'
import Todolist from './Todolist';
const App = () => {

    //state stuff
    const [input, setinput] = useState('');

    const [todo, settodo] = useState([]);

    const [status, setstatus] = useState('all');

    const [filteredtodos, setfilteredtodos] = useState([]);


//run once when the app  starts
useEffect(()=>{
    getlocaltodos();
},[]);

    //useffect

    useEffect(() => { filterhandler(); savelocaltodos();  }, [todo, status]);

    //function


    const filterhandler = () => {
        switch (status) {
            case 'completed':
                setfilteredtodos(todo.filter(todos => todos.completed === true));
                break;

            case 'uncompleted':
                setfilteredtodos(todo.filter(todos => todos.completed === false));
                break;

            default: setfilteredtodos(todo);
                break;
        }
    }


const savelocaltodos=()=>{

        localStorage.setItem('todo',JSON.stringify([]));
    
}


const getlocaltodos=()=>{
    if (localStorage.getItem('todo')===null){
        localStorage.setItem('todo',JSON.stringify([]));
    }
    else{
        let todolocal=JSON.parse(localStorage.getItem('todo'));
        settodo(todolocal);
    }
}


    return (
        <>

            <div className='App'>
                <header>
                    <h1>ToDo List</h1>
                </header>
                <Form
                    input={input}
                    todo={todo}
                    settodo={settodo}
                    setinput={setinput}
                    setstatus={setstatus}
                />



                <Todolist
                    filteredtodos={filteredtodos}
                    settodo={settodo}
                    todo={todo} />
            </div>

        </>

    )
}

export default App;
