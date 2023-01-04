import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Form from "./components/Form";
import Todos from "./components/Todos";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll } from "./redux/todoapp/actions";
import { useState } from "react";
function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.operationsReducer);
  const [editFormVisibility, setEditFormVisibility] = useState(false);
  const [editTodo, setEdittodo] = useState("");
  const handleEditClick = (todo) => {
    setEditFormVisibility(true);
    setEdittodo(todo);
  };
  const cancelUpdate = () => {
    setEditFormVisibility(false);
  };
  return (
    <div className="App">
      <h1>SIMPLE TODO APP USING REACT REDUX</h1>
      <Form
        editFormVisibility={editFormVisibility}
        editTodo={editTodo}
        cancelUpdate={cancelUpdate}
      />
      <Todos
        handleEditClick={handleEditClick}
        editFormVisibility={editFormVisibility}
        editTodo={editTodo}
      />
      {todos.length > 0 && (
        <button
          className="btn btn-danger btn-md"
          onClick={() => dispatch(deleteAll())}
        >
          DELETE ALL
        </button>
      )}
    </div>
  );
}

export default App;
