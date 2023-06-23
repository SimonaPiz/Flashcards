import {createSlice} from '@reduxjs/toolkit';

export const topicsSlice = createSlice({
  name: 'topics',
  initialState: {
    topics: {
      '1': {
        id: '1',
        name:"topic example",
        icon:"./icon/clover.svg",
        quizIds: ["quiz01"]
      },
    }
  },
  reducers: {
    addTopic: (state, action) => {
      const topic = {...action.payload, quizIds: []};            
      return ({...state.topics, [topic.id]: topic});
    },
    addQuizIdToTopics: (state, action) => {
      const { topicId, quizId } = action.payload; //es {quizId: '123', topicId: '456'}      
      state.topics[topicId].quizIds.push(quizId);
    },
  },
});

export const selectTopics = (state) => state.topics.topics;
export const { addTopic, addQuizIdToTopics } = topicsSlice.actions;
export default topicsSlice.reducer;