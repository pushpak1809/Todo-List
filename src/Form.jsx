import React from 'react'

const Form = ({ setinput, input, settodo, todo, setstatus }) => {

    const inputhandler = (event) => {
        console.log(event.target.value);
        setinput(event.target.value);
    }

    const submittodo = (event) => {
        event.preventDefault();
        settodo([...todo,
        {
            text: input, completed: false, id: Math.random() 
        }]);

        setinput('');

    };

const statushandler=(event)=>{
    setstatus(event.target.value)
}


    return (
        <>
            <form>
                <input value={input}
                    onChange={inputhandler}
                    type="text"
                    className='todo-input' />

                <button onClick={submittodo} className='todo-button' type='submit'>
                    <i className='fas fa-plus-square'></i>
                </button>
                <div className="select">
                    <select onChange={statushandler} name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </>
    )
}

export default Form;
