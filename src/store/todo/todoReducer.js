import { v4 } from "uuid";

export const todoActionTypes = {
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
  DELETE_ALL_TODO: "DELETE_ALL_TODO",
  COMPLETE_TODO: "COMPLETE_TODO",
  EDIT_TODO: "EDIT_TODO",
};

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  // console.log({...state});
  switch (action.type) {
    case todoActionTypes.EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((item) => {
          // console.log(item);
          if (item.id === action.id) {
            return { ...item, title: action.value };
          }
          return item;
        }),
      };

    case todoActionTypes.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { title: action.payload, completed: false, id: v4() },
        ],
      };

    case todoActionTypes.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };

    case todoActionTypes.DELETE_ALL_TODO:
      return initialState;

    case todoActionTypes.COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.payload) {
            return { ...item, completed: !item.completed };
          }
          return item;
        }),
      };

    default:
      return state;
  }
};

export default todoReducer;
