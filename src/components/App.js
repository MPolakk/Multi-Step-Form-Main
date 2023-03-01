
import { useState, useCallback} from 'react';
import { useSelector, useDispatch} from 'react-redux'
import {nameState, phoneState, emailState} from '../features/firstStepReducer'
import FirstStep from './FirstStep';
import SecStep from './SecStep';
import ThirdStep from './ThirdStep';
import SumStep from './SumStep';
import LastView from './LastView';
import ButtonsBar from './ButtonsBar';


import '../styles/main.scss'





function App() {
 
  const [pageNum, setPageNum] = useState(2);
  const {nameValid, phoneValid, emailValid, phone, phonePressPlus} = useSelector(state => state.firstStepReducer)

  const dispatch = useDispatch();
  
  

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

      return <FirstStep handleInput={handleInput} />;
      case 2: 
      return <SecStep/>;
      case 3: 
      return <ThirdStep/>;
      case 4: 
      return <SumStep/>;

    }
  }

  //FristStep
  const phoneCorrectValue = useCallback((e) => {
    

   
    if(phonePressPlus) {
      return;
    } 
    
    
    
    dispatch(phoneState(e.target.value.replace(/(\d{1})(\d{3})(\d{3})(\d{3})/, '+$1 $2 $3 $4')))
    
  }, [phone]);
  //------------------------------------//


  function handleInput(e) {


    switch (e.target.name) {
      case 'name':
        dispatch(nameState(e.target.value));
        break;
      case 'email':
        dispatch(emailState(e.target.value));
        break;
      case 'phone':
        phoneCorrectValue(e);

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

export default App