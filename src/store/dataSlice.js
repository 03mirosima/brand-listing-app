import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://api.extrazone.com";

export const getTags = createAsyncThunk("tags/getTags", async () => {
  const response = await fetch(`${API_URL}/tags/list`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Country-Id": "TR",
      "X-Language-Id": "TR",
    },
  });

  const data = await response.json();
  return data;
});
const dataSlice = createSlice({
  name: "data",
  initialState: {
    tags: [],
  },
  reducers: {},

  extraReducers: {
    [getTags.fulfilled]: (state, { payload }) => {
      state.tags = payload;
    },
  },
});
export const {} = dataSlice.actions;
export default dataSlice.reducer;
