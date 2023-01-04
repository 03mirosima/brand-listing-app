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
export const getFilteredPromotions = createAsyncThunk(
  "tags/getFilteredTags",
  async (tagId) => {
    const response = await fetch(
      `${API_URL}/promotions/list?Channel=PWA&TagId=${tagId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Country-Id": "TR",
          "X-Language-Id": "TR",
        },
      }
    );

    const data = await response.json();
    return data;
  }
);
export const getAllPromotions = createAsyncThunk(
  "tags/getAllPromotions",
  async () => {
    const response = await fetch(`${API_URL}/promotions/list?Channel=PWA`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Country-Id": "TR",
        "X-Language-Id": "TR",
      },
    });

    const data = await response.json();
    console.log(data, "all");
    return data;
  }
);
export const getPromotionDetail = createAsyncThunk(
  "tags/getPromotionDetail",
  async (itemId) => {
    const response = await fetch(`${API_URL}/promotions?Id=${itemId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Country-Id": "TR",
        "X-Language-Id": "TR",
      },
    });

    const data = await response.json();
    console.log(data, "details");
    return data;
  }
);
const dataSlice = createSlice({
  name: "data",
  initialState: {
    allPromotions: [],
    filteredPromotions: [],
    promotionDetail: [],
    tags: [],
  },
  reducers: {},

  extraReducers: {
    [getTags.fulfilled]: (state, { payload }) => {
      state.tags = payload;
    },
    [getFilteredPromotions.fulfilled]: (state, { payload }) => {
      state.filteredPromotions = payload;
    },
    [getAllPromotions.fulfilled]: (state, { payload }) => {
      state.allPromotions = payload;
    },
    [getPromotionDetail.fulfilled]: (state, { payload }) => {
      state.promotionDetail = payload;
    },
  },
});
export const {} = dataSlice.actions;
export default dataSlice.reducer;
