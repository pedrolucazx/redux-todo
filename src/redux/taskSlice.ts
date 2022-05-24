import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask, ITasks } from "../models/Task";

const initialState = {
  tasks:
    (JSON.parse(localStorage.getItem("tasks")!) as ITasks) || ([] as ITasks),
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, { payload }: PayloadAction<ITask>) => {
      const task: ITask = {
        id: payload.id,
        label: payload.label,
        description: payload.description,
        completed: false,
        createdAt: payload.createdAt,
      };
      state.tasks.push(task);
    },

    deleteAllTasks: (state) => {
      state.tasks = [];
    },

    deleteOneTask: (state, { payload }: PayloadAction<ITask>) => {
      state.tasks = state.tasks.filter((task) => task.id !== payload.id);
    },

    toggleComplete: (state, action: PayloadAction<ITask>) => {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload.id
          ? { ...task, completed: !task.completed }
          : task
      );
    },
  },
});

export const { addTask, toggleComplete, deleteAllTasks, deleteOneTask } =
  taskSlice.actions;
export default taskSlice.reducer;
