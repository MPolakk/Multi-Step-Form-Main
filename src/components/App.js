
import { useState, useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux'
import {pageNumHandler, nameState, phoneState, emailState} from '../features/firstStepReducer'
import FirstStep from './FirstStep';
import SecStep from './SecStep';
import ThirdStep from './ThirdStep';
import SumStep from './SumStep';
import LastView from './LastView';
import ButtonsBar from './ButtonsBar';
import DesktopView from './appComponents/DesktopView';
import '../styles/main.scss';





function App() {

  const {pageNum, nameValid, phoneValid, emailValid, phonePressPlus} = useSelector(state => state.firstStepReducer)

  const dispatch = useDispatch();
  
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1440);

  const changePageBack = () => {
   
    dispatch(pageNumHandler(pageNum - 1))
 
   
  }
  

  const changePageNext = (e) => {
    
   if(e.target.innerHTML == "Confirm") {
    dispatch(pageNumHandler(5))
   }
    

   
    if(nameValid===true && emailValid === true && phoneValid === true) { 
      if(pageNum<= 3) {
        dispatch(pageNumHandler(pageNum+ 1))
    }
  }

   

  }
  
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
      case 5: 
      return <LastView/>;

    }
  }

  //FristStep
  const phoneCorrectValue = (e) => {
    const isOnePlus = e.target.value.split('').filter((item) => {
      return item == '+'
    })
    

   
    if(phonePressPlus) {
      return;
    } 
    if(isOnePlus.length == 0) {
      dispatch(phoneState(e.target.value.replace(/(\d{1})(\d{3})(\d{3})(\d{3})/, '+$1 $2 $3 $4')))

    } else {
      
    dispatch(phoneState(e.target.value.replace(/(\d{1})(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4')))
  }
 
  
  };
  //------------------------------------//

   useEffect(() => {
    changeStep()

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1440);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
   }, [])
  

  return (
   
    <div className='app' >

      <div className="app__bg">
        <ul className="app__steps">
          
          <li>
          <div className={pageNum == 1 ? 'step--active' : ''}>1</div>
          {isLargeScreen ? <DesktopView stepNum="1" stepTitle="your info"/> : null}
          </li>
          <li>
          <div className={pageNum == 2 ? 'step--active' : ''}>2</div>
          {isLargeScreen ? <DesktopView stepNum="2" stepTitle="select plan"/> : null}
          </li>
          <li>
          <div className={pageNum == 3 ? 'step--active' : ''}>3</div>
          {isLargeScreen ? <DesktopView stepNum="3" stepTitle="add-ons"/> : null}
          </li>
          <li>
          <div className={pageNum >= 4  ? 'step--active' : ''}>4</div>
          {isLargeScreen ? <DesktopView stepNum="4" stepTitle="summary"/> : null}
          </li>
        </ul>
        
      </div>
      <div className='app__form'>
      {changeStep()}
      </div>
     
      {pageNum != 5 ? <ButtonsBar changePageBack = {changePageBack} changePageNext = {changePageNext}  pageNum={pageNum}/> : null }
      </div>
 
  );
}

export default App