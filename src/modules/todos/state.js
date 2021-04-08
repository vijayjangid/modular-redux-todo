import { useState, useLayoutEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { store } from "../../store";
import { TODOS_STORE_KEY, TODO_STATUS } from "./constants";

const initialState = [
  { id: 1, text: "default pending task", status: TODO_STATUS.Pending },
  { id: 2, text: "default done task", status: TODO_STATUS.Done }
];

const reducers = {
  addToDo: (list, item) => [...list, { ...item, id: uuidv4() }],
  removeToDo: (list, item) => list.filter((todo) => todo.id !== item.id),
  updateToDo: (list, item) =>
    list.map((todo) => (todo.id === item.id ? { ...todo, ...item } : todo))
};

// store utils
const getState = () => store.getState()[TODOS_STORE_KEY];

const subscribe = (onUpdate) => {
  let lastState = getState();
  return store.subscribe(
    () => lastState !== getState() && onUpdate((lastState = getState()))
  );
};

// get todo state and subscribe to store updates
export const useToDos = () => {
  const [todos, setTodos] = useState(getState());
  // get latest state from store and subscribe to updates
  useLayoutEffect(() => subscribe(setTodos), [todos]);
  return todos;
};

// action creators
export const addToDo = (item) =>
  store.dispatch({ type: "addToDo", payload: item });
export const removeToDo = (item) =>
  store.dispatch({ type: "removeToDo", payload: item });
export const updateToDo = (item) =>
  store.dispatch({ type: "updateToDo", payload: item });

// finally, inject the reducer
store.injectReducer(
  TODOS_STORE_KEY,
  (state = initialState, { type, payload }) =>
    reducers[type] ? reducers[type](state, payload) : state
);
