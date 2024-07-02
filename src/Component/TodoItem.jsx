import React from 'react';
import "./TodoItem.css";

const TodoItem = (props) => {
    const deletTodo = () => {
        props.onCheck(props.id);
    };
    return (
        <>
            <div className="todo">
            <input type="checkbox" />
                <div className="inner-item">
                    <label>{props.text}</label>
                </div>
                <div className="remove">
                    <button onClick={deletTodo}>➖</button>
                </div>
            </div>
        </>
    )
}

export default TodoItem;
