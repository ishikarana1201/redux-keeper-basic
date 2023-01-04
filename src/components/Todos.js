import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleCheckbox, removeTodo } from "../redux/todoapp/actions";

const Todos = ({ handleEditClick, editFormVisibility }) => {
  const todos = useSelector((state) => state.operationsReducer);
  const dispatch = useDispatch();
  console.log(todos);
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div className="row single-div">
            <div className="col-sm-3">
              {editFormVisibility === false && (
                <input
                  type="checkbox"
                  checked={todo.complated}
                  className="chk"
                  onChange={() => dispatch(handleCheckbox(todo.id))}
                />
              )}
            </div>
            <div className="col-sm-6">
              <span
                className="todo-text"
                style={
                  todo.complated === true
                    ? { textDecoration: "line-through" }
                    : { textDecoration: "none" }
                }
              >
                {todo.todo}
              </span>
            </div>
            <div className="col-sm-3">
              {editFormVisibility === false && (
                <div className="action-icons">
                  <span
                    className="todo-icon"
                    onClick={() => handleEditClick(todo)}
                  >
                    <i className="fa fa-pencil-square" aria-hidden="true"></i>
                  </span>
                  <span
                    className="todo-icon"
                    onClick={() => dispatch(removeTodo(todo.id))}
                  >
                    <i className="fa fa-minus-square" aria-hidden="true"></i>
                  </span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
