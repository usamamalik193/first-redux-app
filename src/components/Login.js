import React from "react";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { login,logout } from "../features/user";

function Login() {
  const dispatch = useDispatch();
  return (
    <div>
      <Button
        onClick={() => {
          dispatch(
            login({
              name: "Usama",
              age: 22,
              email: "usama.malik@gmail.com",
            })
          );
        }}
      >
        Login
      </Button>
      <Button onClick={()=>{
        dispatch(
            logout() 
          );
      }}>Logout</Button>
    </div>
  );
}

export default Login;
