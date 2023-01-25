import {createRoot} from 'react-dom';
import FirstStep from './components/FirstStep';
import SecStep from './components/SecStep';
import ThirdStep from './components/ThirdStep';
import SumStep from './components/SumStep';
import LastView from './components/LastView';
import ButtonsBar from './components/ButtonsBar';


import './styles/main.scss'

function App() {
  
  return (
    <>
      <div className="app__bg">
        <ul className="app__steps">
          <li className="step1 step--active">1</li>
          <li className="step2">2</li>
          <li className="step3">3</li>
          <li className="step4">4</li>
        </ul>
        
      </div>
      <div className='app__form'>
      <LastView></LastView>
      
      </div>
      <ButtonsBar></ButtonsBar>
    </>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);