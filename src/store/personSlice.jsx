import { createSlice } from "@reduxjs/toolkit";

export const personSlice = createSlice({
  name: 'person',
  initialState: {
    value: null
  },
  reducers: {
    selectPerson: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { selectPerson } = personSlice.actions;
export default personSlice.reducer;