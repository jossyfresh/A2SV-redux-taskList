import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './features/taskslice'
import { combineReducers } from 'redux';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer
  }
})


const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;