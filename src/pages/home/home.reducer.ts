import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Service as fetchService} from '../../client/home/getApi';
import {HomeReducer} from '../../constans/types/home';

const initialState: HomeReducer = {
  isLoading: false,
  isError: false,
  errMsg: null,
  data: [],
};

export const resolveService = createAsyncThunk(
    `resolve/service`,
    async (payload, {rejectWithValue}) => {
      const response = await fetchService();
      if (response.error !== null) {
        return response.data;
      }
      return rejectWithValue(response.error);
    },
);

const homeSlice = createSlice({
  name: 'home',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(resolveService.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(resolveService.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      state.isError = false;
      state.data = payload;
    });
    builder.addCase(resolveService.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      state.errMsg = null;
    });
  },
  reducers: {},
});

export const {} = homeSlice.actions;

export default homeSlice.reducer;
