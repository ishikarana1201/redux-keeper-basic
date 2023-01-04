import {
  ADD_TODO,
  DELETE_ALL,
  REMOVE_TODO,
  UPDATE_CHECKBOX,
  UPDATE_TODO,
} from "../../constants";

const initialState = [
  { id: 1, todo: "todo1", complated: false },
  { id: 2, todo: "todozxdf1", complated: false },
  { id: 3, todo: "todsdfsdo1", complated: true },
];
export const operationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_ALL:
      return [];
    case REMOVE_TODO:
      const filteredTodo = state.filter((todo) => todo.id !== action.payload);
      return filteredTodo;
    case UPDATE_TODO:
      let data = action.payload;
      const updatedArray = [];
      state.map((item) => {
        if (item.id === data.id) {
          item.id = data.id;
          item.todo = data.todo;
          item.complated = data.complated;
        }
        updatedArray.push(item);
      });
      return updatedArray;
    case UPDATE_CHECKBOX:
      let todoArray = [];
      state.map((item) => {
        if (item.id === action.payload) {
          item.complated = !item.complated;
        }
        todoArray.push(item);
      });
      return todoArray;
    default:
      return state;
  }
};
