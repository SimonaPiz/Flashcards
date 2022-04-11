import { createSlice } from "@reduxjs/toolkit";


export const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: {}
  },
  reducers: {
    addCard: (state, action) => {
      const newCard = action.payload; //es. { id: '123', front: 'front of card', back: 'back of card'}
      return ({...state.cards, [newCard.id]: newCard});
    },
  },
});

export const selectCards = (state) => state.cards;
export const {addCard} = cardsSlice.actions;
export default cardsSlice.reducer;