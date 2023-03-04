import { configureStore } from '@reduxjs/toolkit';
import firstStepReducer from '../features/firstStepReducer'
import secStepReducer from '../features/secStepReducer'
import thirdStepReducer from '../features/thirdStepReducer';


const store = configureStore({
   reducer: {
   firstStepReducer,
   secStepReducer,
   thirdStepReducer

}
}
)

export default store