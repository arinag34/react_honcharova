import { createAsyncThunk, createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../../models';
import { RootState } from '../index.ts';

const initialTasks = [
  { id: nanoid(), text: 'Visit Kafka Museum', done: true },
  { id: nanoid(), text: 'Watch a puppet show', done: false },
  { id: nanoid(), text: 'Lennon Wall pic', done: false },
] satisfies Task[];

export const sleep = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000)
  })
}

export const addTask = createAsyncThunk<Task, string>('tasks/addTask', async (text) => {
  await sleep();

  return {
    id: nanoid(),
    text,
    done: false,
  }
})

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: initialTasks,
    loading: false,
    error: ''
  },
  reducers: {
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload)
    },
    changeTask: (state, action: PayloadAction<Task>) => {
      state.tasks = state.tasks.map((t) => {
        if (t.id === action.payload.id) {
          return action.payload;
        } else {
          return t;
        }
      })
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTask.pending, (state) => {
        state.loading = true
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload)
        state.loading = false
      })
  }
})

export const { deleteTask ,changeTask } = tasksSlice.actions;

export const selectTasks = (state: RootState) => state.tasks.tasks
