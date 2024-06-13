import axios from "axios";
import * as actionTypes from "../constants/actionsTypes";

export const fetchUsers = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch({ type: actionTypes.FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const fetchUser = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    dispatch({ type: actionTypes.FETCH_USER, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.DELETE_USER, payload: id });
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = (updatedUser) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.UPDATE_USER, payload: updatedUser });
    await axios.put(
      `https://jsonplaceholder.typicode.com/users/${updatedUser.id}`,
      updatedUser
    );
  } catch (error) {
    console.log(error);
  }
};

export const createUser = (newUser) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newUser
    );
    dispatch({ type: actionTypes.NEW_USER, payload: {...data,id:newUser.id} });
  } catch (error) {
    console.log(error);
  }
};
