const FirstStep = () => {
   return ( 
      <div className='first-step'>
         <h1>Personal info</h1>
         <p>Please provide your name, email, address, and phone number.</p>
         <form>
            <label for='name'>Name</label>
            <input type='text' name='name' value='e.g.Stephen King'></input>
            <label for='email' >Email Address</label>
            <input type='text' name='email' value=' e.g.stephenking@lorem.com'></input>
            <label for='phone'>Phone Number</label>
            <input type='text' name='phone' value=' e.g.+1 234 567 890'></input>



         </form>
      </div>
    );
}
 
export default FirstStep;