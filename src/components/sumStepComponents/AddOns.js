const AddOn = (props) => {
   return ( 
      <>
         <span className='bill__add-on'>{props.addOn}</span> 
         <span className="bill__price">{props.addOnPrice}</span>
      </>
    );
}
 
export default AddOn;