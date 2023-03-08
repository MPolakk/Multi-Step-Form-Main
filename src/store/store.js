import { configureStore } from '@reduxjs/toolkit';
import firstStepReducer from '../features/firstStepReducer'
import secStepReducer from '../features/secStepReducer'
import thirdStepReducer from '../features/thirdStepReducer';
import prices from '../features/prices';

const store = configureStore({
   reducer: {
   firstStepReducer,
   secStepReducer,
   thirdStepReducer,
   prices
}
}
)

export default store