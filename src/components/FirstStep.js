import {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {nameBool, phoneBool, emailBool, phonePressPlus} from '../features/firstStepReducer'

const FirstStep = (props) => {
  const {handleInput} = props;

  const {nameValid, phoneValid, emailValid, email, name, phone} = useSelector(state => state.firstStepReducer)
  const dispatch = useDispatch();
  
 //Name Validation

 

   const nameValidation = () => {
     
   //Only two words
      let twoWordValid;
      if(name) {
      const everySingleWord = name.split(' ')
      const valid = everySingleWord.map((word)=> {
        
        if(word[0] && word[0] != ' ' && word[0]===word[0].toUpperCase()) {
          return true
        }
     
  
      })
      valid[0] && valid[1] ? twoWordValid = true : twoWordValid=  false
      
  
    }

    //----------------------------//

    const stringToArr = name.split('')
      
    //Space between word and first two letters to upper case
    const spaceValid = stringToArr.filter((letter) => {
    return letter == ' ';
  })

    const twoUpperCaseValid = stringToArr.filter((letter)=> {
    
    return letter === letter.toUpperCase() && letter != ' ';

  })
 
  
  if(spaceValid.length == 1 && twoUpperCaseValid.length == 2 && twoWordValid ) {
    dispatch(nameBool(true))
    
    return true
  } else  {
    dispatch(nameBool(false))
    return false
    }

  }
 //----------------------------//
 
 
 //Email Validation
   
   const emailValidation = () => {
      const emailSplit = email.split('')
      const emailSplitTwoParts = email.split('@')[1]
      let dotCheck = [];
      const atSymbol = emailSplit.filter((letter)=> {
         if(letter == '@') {
            return true;
         } return;
      })

      if(emailSplitTwoParts) {

        dotCheck = emailSplitTwoParts.split('').filter((letter)=> {
          if(letter == '.'){
            return true
          } 


        })

        
      }

      
      if(atSymbol.length == 1 && dotCheck.length == 1) {
        dispatch(emailBool(true))
        return true
      } else {
        dispatch(emailBool(false))
        return false }
   }
  
    //----------------------------//

    //Phone Validation
   
     const phoneValidation = () => {
      if(/^\+\d{1}\s\d{3}\s\d{3}\s\d{3}$/.test(phone)) {
        
        dispatch(phoneBool(true))
        return true
      } else {
        dispatch(phoneBool(false))
        return false }
      }

      
    
    //----------------------------//

  useEffect(() => {
   nameValidation();
   emailValidation();
   phoneValidation();

 });
 

   return ( 
      <div className="first-step">
         <h1>Personal info</h1>
         <p>Please provide your name, email, address, and phone number.</p>
         <form>
            <label htmlFor='name'>Name</label>
            <input 
            className = {!nameValid && name != '' ? "input--valid" : ""}
           
            placeholder="e.g. Stephen King"
            onChange={handleInput} 
            type='text' 
            name='name'
            value={name}>
            
            </input>

            <label htmlFor='email' >Email Address</label>
            
            <input 
            className = {!emailValid && email != '' ? "input--valid" : ""}
            placeholder="e.g. stephenking@lorem.com"
            onChange={handleInput} 
            type='email' 
            name='email'
            value= {email}>

            </input>

            <label htmlFor='phone'>Phone Number</label>

            <input 
            className = {!phoneValid && phone != ''? "input--valid" : ""}
            placeholder="e.g. +1 234 567 890"
            value= {phone}
            maxLength = "14"
            onKeyDown={(e)=> {
              
              if(e.key == '+' ) {   
                dispatch(phonePressPlus(true))
              } else dispatch(phonePressPlus(false))

            }}
            
            
            onChange={handleInput} 
            type='text'
            name='phone'
            required
            >
            
            </input>



         </form>
         
      </div>
    );
}
 
export default FirstStep;