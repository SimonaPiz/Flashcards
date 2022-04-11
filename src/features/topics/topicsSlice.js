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
  },
});

export const selectTopics = (state) => state.topics;
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;