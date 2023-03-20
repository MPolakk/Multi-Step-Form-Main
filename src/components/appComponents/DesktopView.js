const DesktopView = (props) => {
   return ( 
      <>
         <span className="step-num">STEP {props.stepNum}</span>
          <span className="step-title">{props.stepTitle}</span> 

      </>
    );
}
 
export default DesktopView;