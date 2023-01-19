import arcadeIcon from '../assets/images/icon-arcade.svg'
import advancedIcon from '../assets/images/icon-advanced.svg'
import proIcon from '../assets/images/icon-pro.svg'


const SecStep = () => {
   return ( 
      <div className='sec-step'>
         <h1>Select your plan</h1>
         <p>You have the option of monthly or yearly billing.</p>
         <div className="sec-step__plans">
            <div>
               <img src={arcadeIcon}></img>
               <h2>
                  Arcade
               </h2>
               <span>$9/mo</span>
            </div>

            <div>
               <img src={advancedIcon}></img>
               <h2>
                  Advanced
               </h2>
               <span>$12/mo</span>
            </div>

            <div >
               <img src={proIcon}></img>
               <h2>
                  Pro
               </h2>
               <span>$15/mo</span>
            </div>
            
         </div>

            <div className="plans__switch">
               <span className="switch--active">Monthly</span>

               <div class="switch__toggle">
                  <label for="toggle_input"></label>
                  <input type='checkbox' name="toggle__input"></input>
                  
               </div>

               <span>Yearly</span>
            
            </div>

         
         
      </div>
    );
}
 
export default SecStep;