import {createRoot} from 'react-dom';
import FirstStep from './components/First-Step';
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
        <button className="app__nextbutton">Next Step</button>
      </div>
      <FirstStep></FirstStep>
    </>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);