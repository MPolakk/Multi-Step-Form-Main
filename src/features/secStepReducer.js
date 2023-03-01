import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
   activePlan: 'Arcade',
   monthlyPlan: true,

 }

const secStepReducer = createSlice({
  name: 'secStepReducer',
  initialState,
  reducers: {
   changePlan(state, action) {
      state.activePlan = action.payload
   },
   changeSwitch(state, action) {
      state.monthlyPlan = action.payload
   }

  },
})

export const { changePlan, changeSwitch } = secStepReducer.actions
export default secStepReducer.reducer