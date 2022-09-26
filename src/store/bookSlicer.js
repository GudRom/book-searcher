import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

const HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async function ({ inputSearch, category, order, count }, { rejectWithValue }) {
    try {
        const res = await fetch(
        `${ BASE_URL }?q=intitle:${ inputSearch }+subject:${ category }&orderBy=${ order }&startIndex=${ count }&maxResults=30`,
        {
          method: "GET",
          headers: {
            ...HEADERS,
          },
        }
    )

    if (!res.ok) {
        throw new Error('Server Error!');
    }
    
    const data = await res.json();
    
    return data
    } catch (error) {
       return rejectWithValue(error.message);
    }
  }
);

export const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    currentBook: [],
    totalBooks: null,
    status: null,
    error: null,
  },
  reducers: {
    refreshBooks: (state) => {
      state.books = [];
    },
    addCurrentBook: (state, action) => {
      state.currentBook = action.payload;
    }
  },
  extraReducers: {
    [fetchBooks.pending]: (state) => {
        state.status = 'loading';
        state.error = null;
    },
    [fetchBooks.fulfilled]: (state, action) => {
        state.status = 'resolved';
        state.totalBooks = action.payload.totalItems;
        if (action.payload.items) {
          state.books = state.books.concat(action.payload.items);
        }
    },
    [fetchBooks.rejected]: (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
    },
  }
});

export const { refreshBooks, addCurrentBook } = bookSlice.actions;

export const foundBooks = (state) => state.books;

export default bookSlice.reducer;
