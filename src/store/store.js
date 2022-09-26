import { configureStore } from '@reduxjs/toolkit';
import bookSlicer from './bookSlicer';
import counterReducer from './counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    books: bookSlicer,
  },
});
