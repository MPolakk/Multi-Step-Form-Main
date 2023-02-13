import {createRoot} from 'react-dom/client';
import { useState, useEffect, useCallback} from 'react';
import FirstStep from './components/FirstStep';
import SecStep from './components/SecStep';
import ThirdStep from './components/ThirdStep';
import SumStep from './components/SumStep';
import LastView from './components/LastView';
import ButtonsBar from './components/ButtonsBar';

import './styles/main.scss'





function App() {
 
  const [pageNum, setPageNum] = useState(1);
  // const [mobileHeight, setMobileHeight] = useState();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [phonePressPlus, setPhonePressPlus] = useState(false);
  const [nameValid, setNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);
  
  
  

  const changePageBack = () => {
    setPageNum(pageNum- 1)
    
   
  }
  

  const changePageNext = () => {
    
   
    

   
    if(nameValid===true && emailValid === true && phoneValid === true) { 
      if(pageNum<= 3) {
      setPageNum(pageNum+ 1)
    }
  
  }

   

  }
  
  const changeStep = () => {
    switch(pageNum) {
      case 1: 

      return <FirstStep  email={email} name={name} phone={phone} setPhone={setPhone} phonePressPlus = {phonePressPlus} setPhonePressPlus = {setPhonePressPlus} handleInput={handleInput} setNameValid={setNameValid} setEmailValid={setEmailValid} setPhoneValid={setPhoneValid}/>;
      case 2: 
      return <SecStep/>;
      case 3: 
      return <ThirdStep/>;
      case 4: 
      return <SumStep/>;

    }
  }
  
  
  let firstElement;
  let secElement;

  const phoneCorrectValue = useCallback((e) => {
    

   
    if(phonePressPlus) {
      return;
    } 
    
    
    
    setPhone(e.target.value.replace(/(\d{1})(\d{3})(\d{3})(\d{3})/, '+$1 $2 $3 $4'))


  }, [phone]);
  
  const handleInput = (e) => {


    switch(e.target.name) {
      case 'name': 
        setName(e.target.value)
        break;
      case 'email':
        setEmail(e.target.value)
        break;
      case 'phone':
        phoneCorrectValue(e)
        
        break;
    }
  }
   // For Mobile Height. 
  //  useEffect(() => {
  //   setMobileHeight(window.innerHeight - (window.outerHeight - window.innerHeight))
    
  //  }, [])
  

   
  return (
   
    <div className='app' > 
    {/* style={{
      height: `${mobileHeight}px` 
    }} */}


      <div className="app__bg">
        <ul className="app__steps">
          <li className={pageNum == 1 ? 'step--active' : ''}>1</li>
          <li className={pageNum == 2 ? 'step--active' : ''}>2</li>
          <li className={pageNum == 3 ? 'step--active' : ''}>3</li>
          <li className={pageNum == 4 ? 'step--active' : ''}>4</li>
        </ul>
        
      </div>
      <div className='app__form'>
      {changeStep()}
      </div>
     
      <ButtonsBar changePageBack = {changePageBack} changePageNext = {changePageNext} pageNum={pageNum}></ButtonsBar>
      </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);