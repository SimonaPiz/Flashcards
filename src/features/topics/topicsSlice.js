import {createSlice} from '@reduxjs/toolkit';

export const topicsSlice = createSlice({
  name: 'topics',
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic: (state, action) => {
      const topic = {...action.payload, quizIds: []};
            
      return ({...state, topic});
    },
    addQuizIdToTopics: (state, action) => {
      const quiz = action.payload; //es {quizId: '123', topicId: '456'}
      const findTopic = state.topics.find(topic => topic.id == quiz.topicId);
      findTopic.quizIds.push(quiz.quizId);
      return ({...state, findTopic});
    }
  },
});

export const selectTopics = (state) => state.topics;
export const { addTopic, addQuizIdToTopics } = topicsSlice.actions;
export default topicsSlice.reducer;