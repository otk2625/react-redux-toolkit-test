import React from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../redux/user';

function Login() {
  const dispatch = useDispatch();

  return (
    <div><button onClick={() => {
      dispatch(login({
        name : "오태경",
        age: 28,
        email: "tkoh@dkpia.com"
      }))
    }}>Login</button></div>
  );
}

export default Login