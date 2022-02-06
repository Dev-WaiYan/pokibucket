import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Card from "models/Card";

// Define a type for the slice state
interface CartState {
  isOpenCart: boolean;
  values: {
    quantity: number;
    card: Card;
  }[];
}

// Define the initial state using that type
const initialState: CartState = {
  isOpenCart: false,
  values: [],
};

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    openCart: (state) => {
      state.isOpenCart = true;
    },
    closeCart: (state) => {
      state.isOpenCart = false;
    },
    add: (state, action: PayloadAction<Card>) => {
      state.values = [...state.values, { quantity: 1, card: action.payload }];
    },
    remove: (state, action: PayloadAction<Card>) => {
      state.values = state.values.filter(
        (value) => value.card.id !== action.payload.id
      );
    },
    incrementQuantity: (state, action: PayloadAction<Card>) => {
      const targetIndex = state.values.findIndex(
        (v) => v.card.id === action.payload.id
      );
      const values = [...state.values];
      if (values[targetIndex].quantity < action.payload.set.total) {
        values[targetIndex] = {
          ...values[targetIndex],
          quantity: values[targetIndex].quantity + 1,
        };
      }

      state.values = values;
    },
    decrementQuantity: (state, action: PayloadAction<Card>) => {
      const targetIndex = state.values.findIndex(
        (v) => v.card.id === action.payload.id
      );
      const values = [...state.values];
      values[targetIndex] = {
        ...values[targetIndex],
        quantity: values[targetIndex].quantity - 1,
      };
      state.values = values;
    },
    removeAll: (state) => {
      state.values = [];
    },
  },
});

export const {
  openCart,
  closeCart,
  add,
  remove,
  removeAll,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
