import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
   nameValid: false,
   phoneValid: false,
   emailValid: false,
   email: '',
   name: '',
   phone: '',
   phonePressPlus: false,

 }

const firstStepReducer = createSlice({
  name: 'firstStepReducer',
  initialState,
  reducers: {
    nameBool(state, action) {
      state.nameValid = action.payload;
    },
    phoneBool(state, action ) {
      state.phoneValid = action.payload;
    },
    emailBool(state, action) {
      state.emailValid = action.payload;
    },
    emailState(state, action) {
      state.email= action.payload
    },
    nameState(state, action) {
      state.name = action.payload
    },
    phoneState(state, action) {
      state.phone = action.payload
    },
    phonePressPlus(state, action) {
      state.phonePressPlus = action.payload
    }





  },
})

export const { nameBool, phoneBool, emailBool, emailState, nameState, phoneState, phonePressPlus } = firstStepReducer.actions
export default firstStepReducer.reducer