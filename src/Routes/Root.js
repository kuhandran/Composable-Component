import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import {
  getUser,
  LoginSession, LogoutSession
} from './RootSlice';

export function Root() {
  const user = useSelector(getUser);
  console.log(user,'user');
  const dispatch = useDispatch();

  return (
    <div>
        <button onClick={()=>dispatch(LoginSession())}>Login</button>
        <button onClick={()=>dispatch(LogoutSession())}>Logout</button>
    </div>
  );
}
