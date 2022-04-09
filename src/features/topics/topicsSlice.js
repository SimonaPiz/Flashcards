import {createSlice} from '@reduxjs/toolkit';

export const topicsSlice = createSlice({
  name: 'topics',
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic: (state, action) => {
      const topics = {
        id: action.payload.id,
        name: action.payload.name,
        icon: action.payload.icon,
        quizIds: [],
      };
      return ({...state, topics});
    },
  },
});

export const selectTopics = (state) => state.topics;
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;