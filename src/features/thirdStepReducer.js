import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
   onlineService: false,
   largerStorage: false,
   customProfile: false,

 }

const thirdStepReducer = createSlice({
  name: 'thirdStepReducer',
  initialState,
  reducers: {
   onlineServiceActive(state, action) {
      state.onlineService = action.payload
   },
   largerStorageActive(state, action) {
      state.largerStorage = action.payload
   },
   customProfileActive(state, action) {
      state.customProfile = action.payload
   }

  },
})

export const { onlineServiceActive, largerStorageActive,  customProfileActive} = thirdStepReducer.actions
export default thirdStepReducer.reducer