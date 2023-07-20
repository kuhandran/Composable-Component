import { configureStore } from '@reduxjs/toolkit';
import  sessionReducer  from '../Routes/RootSlice';

export default configureStore({
  reducer: {
    session: sessionReducer,
  },
});
