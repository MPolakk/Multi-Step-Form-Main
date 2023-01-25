const SumStep = () => {
   return ( 
      <>
         <h1>Finishing up</h1>
         <p>Dobule-check everything looks OK before confirming</p>
         <div className='sum-step'>
            <div className='sum-step__plan'>
               <h2 className='plan'>Arcade (Monthly) </h2>
               <button className='change-button'>Change</button>
               <span className='price'>$9/mo</span>
            </div>
            <span className='line'></span>
            <div className='sum-step__bill'>
               <span className='bill__add-on'> Online service</span>
               <span className="bill__price">+$1/mo</span>
               <span className='bill__add-on'>Larger storage</span>
               <span className="bill__price">+$2/mo</span>
               <span className='bill__add-on'>Larger storage</span>
               <span className="bill__price">+$2/mo</span>
            
            </div>
         </div>
         <div className="sum-result">
         <span className="result">Total (per month)</span>
         <span className="price">+$120/mo</span>
         </div>
      </>
    );
}
 
export default SumStep;