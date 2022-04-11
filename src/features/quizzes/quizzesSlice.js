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

export const selectQuizzes = (state) => state.quizzes;
export const {addQuiz} = quizzesSlice.actions;
export default quizzesSlice.reducer;