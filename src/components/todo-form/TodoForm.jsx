import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { todoActionTypes } from "../../store/todo/todoReducer";
import TodoList from "../todo-list/TodoList";

const TodoForm = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const todo = useSelector((state) => state.todo);

  const changeInputHandler = (e) => {
    setValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: todoActionTypes.ADD_TODO, payload: value });
    setValue("");
  };

  const removeAllTodo = () => {
    dispatch({ type: todoActionTypes.DELETE_ALL_TODO });
  };

  // console.log(todo.todo);

  return (
    <Container>
      <div>
        <input type="text" value={value} onChange={changeInputHandler} />
        <button onClick={submitHandler} disabled={!value}>
          Add
        </button>
        <button onClick={removeAllTodo}>delete all</button>
      </div>
      <StyledUl>
        {todo.todos.map((item) => (
          <div key={item.id}>
            <TodoList todo={item} />
            {/* {console.log(item)} */}
          </div>
        ))}
      </StyledUl>
    </Container>
  );
};

export default TodoForm;

const Container = styled.div`
  text-align: center;
`;

const StyledUl = styled.ul`
  list-style: none;
  display: grid;
  gap: 1rem;
  padding: 0;
`;
