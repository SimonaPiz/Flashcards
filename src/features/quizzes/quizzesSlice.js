import { createSlice } from "@reduxjs/toolkit";
import { addQuizIdToTopics } from "../topics/topicsSlice";

export const associatedNewQuizToTopic = (newQuiz) => {
  const { topicId, quizId } = newQuiz;
  return (dispatch) => {
    dispatch(addQuiz(newQuiz));
    dispatch(addQuizIdToTopics({
      topicId: topicId,
      quizId: quizId
    }));
  };    
};

export const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState: {
    quizzes: {
      'quiz01':{
        quizId: "quiz01",
        name: "quiz example",
        topicId: "1",
        cardIds: [ "01", "02", ]
      },
    }
  },
  reducers: {
    addQuiz: (state, action) => {
      const {quizId} = action.payload; //es. { id: '123', name: 'quiz name', topicId: '456', cardIds: ['1', '2', '3', ...]}
      state.quizzes[quizId] = action.payload;
    }
  }
});

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const {addQuiz} = quizzesSlice.actions;
export default quizzesSlice.reducer;