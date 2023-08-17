import {  createSlice } from '@reduxjs/toolkit'

export interface Task {
  id: number
  text: string
  completed: boolean 
}

export interface TasksState {
  tasks: Task[]
}

const initialState: TasksState = {
  tasks: [
   
  ]
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload)  
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find(t => t.id === action.payload)
      if (task) {
        task.completed = !task.completed
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(t => t.id !== action.payload)    
    },
    updateTask:(state,action) => {
        const task = state.tasks.find(t => t.id === action.payload.id)
      if (task) {
        task.text = action.payload.text;
      }
    }
  }
})

export const { addTask, toggleTask, deleteTask,updateTask } = tasksSlice.actions
export default tasksSlice.reducer
