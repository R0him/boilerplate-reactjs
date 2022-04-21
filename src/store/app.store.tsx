import {configureStore} from '@reduxjs/toolkit';
import homeReducer from '../pages/home/home.reducer';

const store = configureStore({
  reducer: {
    home: homeReducer,
  },
});

export default store;
