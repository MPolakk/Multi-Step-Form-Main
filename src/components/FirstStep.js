import {useEffect, useCallback} from 'react'


const FirstStep = (props) => {
   const {handleInput, setNameValid, setEmailValid, email, name, phone, setPhonePressPlus, setPhoneValid} = props;   
 //Name Validation


 

   const nameValidation = useCallback(() => {
     
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
    setNameValid(true)
  } else setNameValid(false)

  },[name] );
 //----------------------------//
 
 
 //Email Validation
   
   const emailValidation = useCallback(() => {
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
        setEmailValid(true)
      } else setEmailValid(false)

   }, [email])
  
    //----------------------------//

    //Phone Validation
   
     const phoneValidation = () => {
      if(/^\+\d{1}\s\d{3}\s\d{3}\s\d{3}$/.test(phone)) {
        
        setPhoneValid(true)
      } else setPhoneValid(false)

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
            placeholder="e.g. Stephen King"
            onChange={handleInput} 
            type='text' 
            name='name'
            value={name}>

            </input>

            <label htmlFor='email' >Email Address</label>
            
            <input 
            placeholder="e.g. stephenking@lorem.com"
            onChange={handleInput} 
            type='email' 
            name='email'
            value= {email}>

            </input>

            <label htmlFor='phone'>Phone Number</label>

            <input 
            placeholder="e.g. +1 234 567 890"
            value= {phone}
            onFocus={() => {
            //   if(phone.length == 0) {
            //   setPhone('+')
            // }
            }}
            onBlur={() => {
            //   if(phone == '+') {
            //   setPhone('')
            // } else setPhone(phone)
            }}
            onKeyDown={(e)=> {
              
              if(e.key == '+' ) {   
                setPhonePressPlus(true)
              } else setPhonePressPlus(false)

            }}
            
            
            onChange={handleInput} 
            type='text'
            name='phone'
            maxLength='14'
            required
            >
            
            </input>



         </form>
         
      </div>
    );
}
 
export default FirstStep;