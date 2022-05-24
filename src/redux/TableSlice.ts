import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  table: (localStorage.getItem("table") as string) || "andamento",
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    updateTable: (state, { payload }: PayloadAction<string>) => {
      state.table = payload;
    },
  },
});

export const { updateTable } = tableSlice.actions;
export default tableSlice.reducer;
