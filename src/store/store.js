import { configureStore } from '@reduxjs/toolkit';
import firstStepReducer from '../features/firstStepReducer'
import secStepReducer from '../features/secStepReducer'



const store = configureStore({
   reducer: {
   firstStepReducer,
   secStepReducer

}
}
)

export default store