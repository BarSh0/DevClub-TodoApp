import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('fetchData', async () => {
  return await Promise.resolve('Data');
});
