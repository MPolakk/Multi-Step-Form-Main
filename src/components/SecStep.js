import arcadeIcon from '../assets/images/icon-arcade.svg'
import advancedIcon from '../assets/images/icon-advanced.svg'
import proIcon from '../assets/images/icon-pro.svg'
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changePlan, changeSwitch} from '../features/secStepReducer'

const SecStep = () => {
  //PLANS
  
   const {activePlan, monthlyPlan} = useSelector(state=> state.secStepReducer)
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
               <span>$9/mo</span>
            </div>

            <div onClick={handleActivePlan} className= {changeActivePlan('Advanced')}>
               <img src={advancedIcon}></img>
               <h2>
                  Advanced
               </h2>
               <span>$12/mo</span>
            </div>

            <div onClick={handleActivePlan} className= {changeActivePlan('Pro')} >
               <img src={proIcon}></img>
               <h2>
                  Pro
               </h2>
               <span>$15/mo</span>
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