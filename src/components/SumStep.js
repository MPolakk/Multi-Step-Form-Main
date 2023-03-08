import { useSelector, useDispatch } from "react-redux";
import AddOn from './sumStepComponents/AddOns'
import { useEffect, useCallback} from "react";
import { totalPriceReducer, activePlanPriceReducer } from '../features/prices';
const SumStep = () => {
   const {secStepReducer, thirdStepReducer, prices} = useSelector(state => (state));

   const {activePlan, monthlyPlan} = secStepReducer;
   const {onlineService, largerStorage, customProfile} = thirdStepReducer;
   const {arcadePrice, advancedPrice, proPrice, onlineServicePrice, largerStoragePrice, customProfilePrice, activePlanPrice, totalPrice} = prices;
   const dispatch = useDispatch();

   const totalPriceHandle = () => {
      let totalPrice = null;
      switch(activePlan) {
         case "Arcade":
            totalPrice += arcadePrice
         dispatch(activePlanPriceReducer(arcadePrice))
         break;
         case "Advanced":
            totalPrice += advancedPrice
         dispatch(activePlanPriceReducer(advancedPrice))
         break;
         case "Pro":
            totalPrice += proPrice
         dispatch(activePlanPriceReducer(proPrice))
         break;

      }

      
      onlineService ? totalPrice += onlineServicePrice : null
      largerStorage ? totalPrice += largerStoragePrice : null
      customProfile ? totalPrice += customProfilePrice : null

      if(!monthlyPlan) {
         totalPrice = totalPrice * 10
      }
      console.log(totalPrice)
      dispatch(totalPriceReducer(totalPrice))
   }

   useEffect(() => {
      totalPriceHandle()
  
   }, [])

   return ( 
      <>
         <h1>Finishing up</h1>
         <p>Dobule-check everything looks OK before confirming</p>
         <div className='sum-step'>
            <div className='sum-step__plan'>
               <h2 className='plan'>{activePlan} ({monthlyPlan ? "Monthly": "Yearly"}) </h2>
               <button className='change-button'>Change</button>
               <span className='price'>{monthlyPlan ? `${activePlanPrice}$/mo`: `$${activePlanPrice}0/yr`}</span>
            </div>
            <span className='line'></span>
            <div className='sum-step__bill'>
               
               {onlineService ? <AddOn addOn='Online Service' addOnPrice={monthlyPlan ? "+$1/mo": "+$10/yr"}></AddOn> : null}
               {largerStorage ? <AddOn addOn='Larger Storage' addOnPrice={monthlyPlan ? "+$2/mo": "+$20/yr"}></AddOn> : null}
               {customProfile ? <AddOn addOn='Customizable profile' addOnPrice={monthlyPlan ? "+$2/mo": "+$20/yr"}></AddOn> : null}
            
            </div>
         </div>
         <div className="sum-result">
         <span className="result">Total (per {monthlyPlan ? "month" : "year"})</span>
         <span className="price">{monthlyPlan ? `+$${totalPrice}/mo` : `+$${totalPrice}/yr`}</span>
         </div>
      </>
    );
}
 
export default SumStep;