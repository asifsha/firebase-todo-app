import { todosRef } from "../firebase";
import * as types from "../actions/actionTypes";


export const addToDo = newToDo => async dispatch => {
  todosRef.push().set(newToDo);
};
export const completeToDo = todoId => async dispatch => {
  todosRef.child(todoId).remove();
  
  dispatch({
    type: types.COMPLETE_TODOS,
    payload: null
  });
};
export const fetchToDos = () => async dispatch => {
  todosRef.on("value", snapshot => {
    dispatch({
      type: types.FETCH_TODOS,
      payload: snapshot.val()
    });
  });
};
