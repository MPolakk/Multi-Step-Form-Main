const ThirdStep = () => {
   return ( 
   <div className='third-step'>
      <h1>Pick add-ons</h1>
      <p>
         Add-ons help enhance your gaming experience.

      </p>
      <div className='third-step__plans'>
         <label>
            
            <input name='add-ons' type='checkbox'></input>
            <h2>Online Service</h2>
            <span>Access to multiplayer games</span>
            <span className='price'>+$1/mo</span>
            
         </label>

         <label>
            
            <input type='checkbox'></input>
            <h2>Larger storage</h2>
            <span>Extra 1TB of cloud save</span>
            <span className='price'>+$2/mo</span>
         </label>

         <label>
            
            <input name="add-ons" type='checkbox'></input>
            
            <h2>Customizable profile</h2>
            <span>Custom theme on your profile</span>
            <span className='price'>+$2/mo</span>
            
         </label>

      </div>
   </div> );
}
 
export default ThirdStep;