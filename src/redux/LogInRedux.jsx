import React from "react";
import * as actions from "./actions";
import { useDispatch, useSelector } from "react-redux";

export default function LogInRedux() {
  const logIn = useSelector((state) => state.idLogged);
  console.log("logIn status", logIn);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>log In  {logIn}</h1>
      <button onClick={() => dispatch(actions.logIn())}>Log In </button>
      <button onClick={() => dispatch(actions.logOut())}>Log Out</button>
      
    </div>
  );
};
