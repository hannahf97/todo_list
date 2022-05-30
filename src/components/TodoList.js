

const TodoList = (todolist, deleteTodo) => {

    return(
        <div>
        {todolist.map((list, idx) => (<div><span key={idx}>{list}</span> <button onClick={deleteTodo}>x</button></div>))}
        </div>
    )


};

export default TodoList;