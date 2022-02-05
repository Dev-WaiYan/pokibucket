import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Card from "models/Card";

// Define a type for the slice state
interface CartState {
  cards: Card[];
}

// Define the initial state using that type
const initialState: CartState = {
  cards: [],
};

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    add: (state, action: PayloadAction<Card>) => {
      state.cards = [...state.cards, action.payload];
    },
    remove: (state, action: PayloadAction<string>) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },
    removeAll: (state) => {
      state.cards = [];
    },
  },
});

export const { add, remove, removeAll } = cartSlice.actions;
export default cartSlice.reducer;
