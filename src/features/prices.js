import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
   arcadePrice: 9,
   advancedPrice: 12,
   proPrice: 15,
   onlineServicePrice: 1,
   largerStoragePrice: 2,
   customProfilePrice: 2,
   totalPrice: null,
   activePlanPrice: null,

 }

const prices = createSlice({
  name: 'prices',
  initialState,
  reducers: {
    totalPriceReducer(state, action) {
      state.totalPrice = action.payload
    },
    activePlanPriceReducer(state, action) {
      state.activePlanPrice = action.payload

    }

  },
})

export const { totalPriceReducer, activePlanPriceReducer } = prices.actions
export default prices.reducer