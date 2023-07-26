import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import {
  getUser,
  LoginSession, LogoutSession
} from './RootSlice';
import "./Root.css"

export function Root() {
  const user = useSelector(getUser);
  console.log(user,'user');
  const dispatch = useDispatch();

  return (
    <div>
       <h1 className="text-4xl text-blue-700">My Webpack + Tailwind App</h1>
      <h1 className="text-primary text-4xl font-bold">Hello world! I am using React</h1>;
        <button onClick={()=>dispatch(LoginSession())}>Login</button>
        <button onClick={()=>dispatch(LogoutSession())}>Logout</button>
    </div>
  );
}
