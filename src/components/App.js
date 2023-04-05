
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { pageNumHandler, nameState, phoneState, emailState } from '../features/firstStepReducer'
import FirstStep from './FirstStep';
import SecStep from './SecStep';
import ThirdStep from './ThirdStep';
import SumStep from './SumStep';
import LastView from './LastView';
import ButtonsBar from './ButtonsBar';
import DesktopView from './appComponents/DesktopView';
import '../styles/main.scss';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";


function App() {
  const { pageNum, nameValid, phoneValid, emailValid, phonePressPlus } = useSelector(state => state.firstStepReducer)

  const dispatch = useDispatch();

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1440);
  const location = useLocation();
  const navigate = useNavigate();

  const changePageBack = () => {

    dispatch(pageNumHandler(pageNum - 1))


  }

  const changeStep = () => {
    switch (pageNum) {
      case 1:

        return '/';
      case 2:
        return '/sec-step';
      case 3:
        return '/third-step';
      case 4:
        return '/sum-step';
      case 5:
        return '/last-step';

    }
  }


  const changePageNext = (e) => {

    if (e.target.innerHTML == "Confirm") {
      dispatch(pageNumHandler(5))
    }



    if (nameValid === true && emailValid === true && phoneValid === true) {
      if (pageNum <= 3) {
        dispatch(pageNumHandler(pageNum + 1))
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


  //FristStep
  const phoneCorrectValue = (e) => {
    const isOnePlus = e.target.value.split('').filter((item) => {
      return item == '+'
    })



    if (phonePressPlus) {
      return;
    }
    if (isOnePlus.length == 0) {
      dispatch(phoneState(e.target.value.replace(/(\d{1})(\d{3})(\d{3})(\d{3})/, '+$1 $2 $3 $4')))

    } else {

      dispatch(phoneState(e.target.value.replace(/(\d{1})(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4')))
    }


  };
  //------------------------------------//

  useEffect(() => {

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1440);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [])
  useEffect(() => {
    console.log(location)
    navigate(`${changeStep()}`);
  }, [pageNum])

  return (

    <div className='app' >

      <div className="app__bg">
        <ul className="app__steps">

          <li>
            <div className={pageNum == 1 ? 'step--active' : ''}>1</div>
            {isLargeScreen ? <DesktopView stepNum="1" stepTitle="your info" /> : null}
          </li>
          <li>
            <div className={pageNum == 2 ? 'step--active' : ''}>2</div>
            {isLargeScreen ? <DesktopView stepNum="2" stepTitle="select plan" /> : null}
          </li>
          <li>
            <div className={pageNum == 3 ? 'step--active' : ''}>3</div>
            {isLargeScreen ? <DesktopView stepNum="3" stepTitle="add-ons" /> : null}
          </li>
          <li>
            <div className={pageNum >= 4 ? 'step--active' : ''}>4</div>
            {isLargeScreen ? <DesktopView stepNum="4" stepTitle="summary" /> : null}
          </li>
        </ul>

      </div>
      <div className='app__form'>


        <Routes>
          <Route exact path="/" element={<FirstStep handleInput={handleInput} />} />
          <Route path="/sec-step" element={<SecStep />} />
          <Route path="/third-step" element={<ThirdStep />} />
          <Route path="/sum-step" element={<SumStep />} />
          <Route path="/last-step" element={<LastView />} />
        </Routes>

      </div>
      {pageNum != 5 ? <ButtonsBar changePageBack={changePageBack} changePageNext={changePageNext} pageNum={pageNum} /> : null}
    </div>

  );
}

export default App