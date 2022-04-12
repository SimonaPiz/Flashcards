import { createSlice } from "@reduxjs/toolkit";
import { addQuizIdToTopics } from "../topics/topicsSlice";

export const associatedNewQuizToTopic = (newQuiz) => {
  return async (dispatch) => {
    dispatch(addQuiz(newQuiz));
    dispatch(addQuizIdToTopics(newQuiz));
  };    
};

export const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState: {
    quizzes: {},
  },
  reducers: {
    addQuiz: (state, action) => {
      const newQuiz = action.payload; //es. { id: '123', name: 'quiz name', topicId: '456', cardIds: ['1', '2', '3', ...]}
      return {...state.quizzes, [newQuiz.quizId]: newQuiz};
    }
  }
});

export const selectQuizzes = (state) => state.quizzes;
export const {addQuiz} = quizzesSlice.actions;
export default quizzesSlice.reducer;