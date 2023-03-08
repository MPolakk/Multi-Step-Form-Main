import arcadeIcon from '../assets/images/icon-arcade.svg'
import advancedIcon from '../assets/images/icon-advanced.svg'
import proIcon from '../assets/images/icon-pro.svg'

import {useDispatch, useSelector} from 'react-redux';
import {changePlan, changeSwitch} from '../features/secStepReducer'





const SecStep = () => {
  
  //PLANS
   const { secStepReducer, prices} = useSelector(state => state);
   const {activePlan, monthlyPlan} = secStepReducer;
   const {arcadePrice, advancedPrice, proPrice, onlineServicePrice, largerStoragePrice, customProfilePrice, totalPrice} = prices;

   const dispatch = useDispatch()

   const handleActivePlan = (e) => {
      dispatch(changePlan(e.target.children[1].innerHTML))
   }

   const changeActivePlan = (el) => {
     return activePlan == el ? 'plan plan--active' : 'plan'
    
   }
   //------------------//

   //SWITCH

   

   const handleActiveSwitch = () => {
      dispatch(changeSwitch(!monthlyPlan))
   }
   

   return ( 
      <div className='sec-step'>
         <h1>Select your plan</h1>
         <p>You have the option of monthly or yearly billing.</p>
         <div className="sec-step__plans">
            <div onClick={handleActivePlan} className= {changeActivePlan('Arcade')}>
               <img src={arcadeIcon}></img>
               <h2>
                  Arcade
               </h2>
               {monthlyPlan ? <span>${arcadePrice}/mo</span> : <span>${arcadePrice}0/yr</span>}
               {!monthlyPlan ? <span className="plans__bonus">2 months free</span> : null }
            </div>

            <div onClick={handleActivePlan} className= {changeActivePlan('Advanced')}>
               <img src={advancedIcon}></img>
               <h2>
                  Advanced
               </h2>
               {monthlyPlan ? <span>${advancedPrice}/mo</span> : <span>${advancedPrice}0/yr</span>}
               {!monthlyPlan ? <span className="plans__bonus">2 months free</span> : null }
            </div>

            <div onClick={handleActivePlan} className= {changeActivePlan('Pro')} >
               <img src={proIcon}></img>
               <h2>
                  Pro
               </h2>
               {monthlyPlan ? <span>${proPrice}/mo</span> : <span>${proPrice}0/yr</span>}
               {!monthlyPlan ? <span className="plans__bonus">2 months free</span> : null }
            </div>
            
         </div>

            <div className="plans__switch" onClick= {handleActiveSwitch}>

               <span 
               className={monthlyPlan ? 'switch--active' : ''}>
               Monthly
               </span>

               <div 
               className="switch__toggle">
               <label 
               style = {
                  monthlyPlan ? {"--monthly": "0.2em","--yearly": 'none'} : {"--monthly": "none","--yearly": '0.2em'}
               
                  } 
                  
               htmlFor="toggle_input">

               </label>
               <input 
               type='checkbox' 
               name="toggle__input">

               </input>
                  
               </div>

               <span className= {!monthlyPlan ? 'switch--active' : ''}>Yearly</span>
            
            </div>

         
         
      </div>
    );
}
 
export default SecStep;