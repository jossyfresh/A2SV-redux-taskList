import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './features/taskslice'
import { combineReducers } from 'redux';

declare global {
  interface Window {
    store: typeof store;
  }
}


export const store = configureStore({
  reducer: {
    tasks: tasksReducer
  }
})

window.store = store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch