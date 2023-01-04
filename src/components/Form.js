import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, handleEditSubmit } from "../redux/todoapp/actions";

const Form = ({ editFormVisibility, editTodo, cancelUpdate }) => {
  const [todoValue, setTodoValue] = useState("");
  const [editValue, setEditValue] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    setEditValue(editTodo.todo);
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(new Date().getTime());
    let todoObj = {
      id: new Date().getTime(),
      todo: todoValue,
      complated: false,
    };
    setTodoValue("");
    dispatch(addTodo(todoObj));
  };

  const editSubmit = (e) => {
    e.preventDefault();
    let edittodoObj = {
      id: editTodo.id,
      todo: editValue,
      complated: false,
    };
    setTodoValue("");
    dispatch(handleEditSubmit(edittodoObj));
  };
  return (
    <div className="card">
      <div className="card-body">
        {editFormVisibility === false ? (
          <form
            className="form-group custom-form d-flex"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="todo"
                value={todoValue}
                onChange={(e) => setTodoValue(e.target.value)}
              />
            </div>
            <div className="submit-btn">
              <button className="btn btn-primary btn-md" type="submit">
                ADD
              </button>
            </div>
          </form>
        ) : (
          <>
            <form
              className="form-group custom-form d-flex"
              onSubmit={editSubmit}
            >
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="todo"
                  value={editValue || ""}
                  onChange={(e) => setEditValue(e.target.value)}
                />
              </div>
              <div className="submit-btn">
                <button className="btn btn-primary btn-md" type="submit">
                  UPDATE
                </button>
              </div>
            </form>
            <div className="submit-btn p-2">
              <button
                className="btn btn-primary btn-md"
                onClick={cancelUpdate}
                type="submit"
              >
                BACK
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Form;
