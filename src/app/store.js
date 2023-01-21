import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../components/TasksSlice';


export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});