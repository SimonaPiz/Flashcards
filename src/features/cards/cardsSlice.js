import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: {
      "01": {
        id: "01",
        back: "back 1", 
        front: "front 1"
      },
      "02": {
        id: "02",
        back: "back 2", 
        front: "front 2"
      }
    }
  },
  reducers: {
    addCard: (state, action) => {
      const {id} = action.payload; //es. { id: '123', front: 'front of card', back: 'back of card'}
      state.cards[id] = action.payload;
    },
  },
});

export const selectCards = (state) => state.cards.cards;
export const {addCard} = cardsSlice.actions;
export default cardsSlice.reducer;