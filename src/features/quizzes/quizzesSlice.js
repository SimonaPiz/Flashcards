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
    quizzes: {
      '456': { id: '456', name: 'quiz name', topicId: '123', cardIds: ['1', '2', '3']}
    },
  },
  reducers: {
    addQuiz: (state, action) => {
      const newQuiz = action.payload; //es. { id: '123', name: 'quiz name', topicId: '456', cardIds: ['1', '2', '3', ...]}
      return {...state, newQuiz};
    }
  }
});

export const selectQuizzes = (state) => state.quizzes;
export const {addQuiz} = quizzesSlice.actions;
export default quizzesSlice.reducer;