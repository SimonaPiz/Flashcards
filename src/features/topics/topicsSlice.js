import {createSlice} from '@reduxjs/toolkit';

export const topicsSlice = createSlice({
  name: 'topics',
  initialState: {
    topics: {
      1: {
        id: 1,
        name:"clover",
        icon:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/clover.svg",
        quizIds: []
      },
    }
  },
  reducers: {
    addTopic: (state, action) => {
      const topic = {...action.payload, quizIds: []};            
      return ({...state.topics, [topic.id]: topic});
    },
    addQuizIdToTopics: (state, action) => {
      const quiz = action.payload; //es {quizId: '123', topicId: '456'}      
      const addQuizId = (state.topics).map(topic => {
        if(topic.id === quiz.topicId) {
          topic.quizIds.push(quiz.quizId);
          return topic;
        }    
        return topic;
      });
      addQuizId();
    }
  },
});

export const selectTopics = (state) => state.topics;
export const { addTopic, addQuizIdToTopics } = topicsSlice.actions;
export default topicsSlice.reducer;