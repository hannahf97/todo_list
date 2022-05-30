

const TodoList = (todolist) => {
    const deleteTodo = (e) =>{
        let parentElement = e.target.parentElement;
        console.log(parentElement);
        parentElement.style.textDecorationLine = "line-through";

    }
    return(
        <div>
        {todolist.todolist.map((list, idx) => (<div><ul><li key="{idx}">{list} <button onClick={deleteTodo}>x</button></li></ul></div>))}
        </div>
    )


};

export default TodoList;