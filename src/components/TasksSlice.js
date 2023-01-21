import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [
    {
      id: 1,
      project_name: "Company A",
      task_name: "Pentest",
      status: "Not Started",
    },
    {
      id: 2,
      project_name: "Company B",
      task_name: "Pentest",
      status: "In Progress",
    },
    {
      id: 3,
      project_name: "Company C",
      task_name: "Pentest",
      status: "Completed",
    },
    {
      id: 4,
      project_name: "Company D",
      task_name: "Pentest",
      status: "Completed",
    },
  ]
};

export const TasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    add: (state, action) => {
        var tempValue = [
            ...state,
            {
              id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
              project_name: action.object.project_name,
              task_name: action.object.task_name,
              status: action.object.status
            }
        ]
        state.value = tempValue;
    },
    decrement: (state, action) => {
        var tempList = state.filter(task =>
            action.list.forEach(element => {
                task.id !== element.id
            })  
          )
      state.value = tempList;
    },
  
  },
  extraReducers: (builder) => {
  },
});

export const { add, decrement } = TasksSlice.actions;

export const getTasks = (state) => state.tasks.value;

export default TasksSlice.reducer;