import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUserById = (userId) => {
  new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          id: 1,
          name: "Serj",
        }),
      1000
    )
  );
};

export const getUserById = (userId) => {
  createAsyncThunk("users/by-id", async (userId, thunkApi) => {
    try {
      const response = await fetchUserById(userId);
      return response;
    } catch (error) {
      thunkApi.rejectWithValue({});
    }
  });
};
