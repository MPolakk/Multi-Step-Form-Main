import { useDispatch, useSelector } from "react-redux";
import {onlineServiceActive, largerStorageActive,  customProfileActive} from '../features/thirdStepReducer';
import { useEffect } from "react";


const ThirdStep = () => {
   const {thirdStepReducer, secStepReducer, prices} = useSelector(state => state);
   const {onlineService, largerStorage, customProfile} = thirdStepReducer;
   const {monthlyPlan} = secStepReducer;
   const {onlineServicePrice, largerStoragePrice, customProfilePrice} = prices;
   const dispatch = useDispatch();



   const activeAddOn = (e) => {
      switch(e.target.name) {
         case 'online-service': {
            dispatch(onlineServiceActive(!onlineService))
            break;
         }
         case 'larger-storage': {
            dispatch(largerStorageActive(!largerStorage))
            break;
         }
         case 'custom-profile': {
            dispatch(customProfileActive(!customProfile))
            break;
         }
      }

   }




   return ( 
   <div className='third-step'>
      <h1>Pick add-ons</h1>
      <p>
         Add-ons help enhance your gaming experience.

      </p>
      <div className='third-step__plans'>

         
         <label onChange={activeAddOn}>
            
            <input readOnly checked={onlineService ? true : false} name='online-service' type='checkbox'></input>
            <h2>Online Service</h2>
            <span>Access to multiplayer games</span>
            <span className='price'>{monthlyPlan ? `+$${onlineServicePrice}/mo` : `+$${onlineServicePrice}0/yr`}</span>
            
         </label>

         <label onChange={activeAddOn}>
            
            <input readOnly checked={largerStorage ? true : false} name='larger-storage' type='checkbox' ></input>
            <h2>Larger storage</h2>
            <span>Extra 1TB of cloud save</span>
            <span className='price'>{monthlyPlan ? `+$${largerStoragePrice}/mo` : `+$${largerStoragePrice}0/yr`}</span>
         </label>

         <label onChange={activeAddOn}>
            
            <input readOnly checked={customProfile ? true : false} name='custom-profile' type='checkbox'></input>
            
            <h2>Customizable profile</h2>
            <span>Custom theme on your profile</span>
            <span className='price'>{monthlyPlan ? `+$${customProfilePrice}/mo` : `+$${largerStoragePrice}0/yr`}</span>
            
         </label>

      </div>
   </div> );
}
 
export default ThirdStep;