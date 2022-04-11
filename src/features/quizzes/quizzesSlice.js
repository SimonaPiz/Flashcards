import { createSlice } from "@reduxjs/toolkit";


export const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState: {
    quizzes: {},
  },
  reducers: {
    addQuiz: (state, action) => {
      const newQuiz = action.payload;
      return {...state, newQuiz};
    }
  }
});