const ButtonsBar = (props) => {

   const {changePageBack, changePageNext, pageNum} = props;
   
   return ( 
      <div 
      className='buttons-bar' 
      style={ 
         {justifyContent: pageNum == 1 ? "flex-end" : "space-between"}
         }>
            
         <button
         className="bar__back" 
         onClick={changePageBack}  
         style={
          {
          display: pageNum == 1 ? "none"  : "block"

         }
          }>
         Go Back
         </button>
         <button 
         onClick={changePageNext} 
         style= { {
            backgroundColor: pageNum == 4 ? "hsl(243, 100%, 62%)" : "hsl(213, 96%, 18%)"



         }}
         className="bar__next">
         {pageNum == 4 ? "Confirm" : "Next Step"}
         </button>
      </div>
    );
}
 
export default ButtonsBar;