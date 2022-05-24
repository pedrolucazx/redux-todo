import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "./TableSlice";
import tasksReducer from "./taskSlice";

export const store = configureStore({
  reducer: {
    table: tableReducer,
    tasks: tasksReducer,
  },
});
