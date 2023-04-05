import iconThankYou from '../assets/images/icon-thank-you.svg'
import { Route } from 'react-router-dom';

const LastView = () => {
   return (
      <>
         <div className="last-view">
            <img src={iconThankYou}></img>
            <h1>Thank you</h1>
            <p>Thanks for confirming your subscription!</p>
            <p>We hope you have fun using our platform. If you ever need support, please feel free to email ust at support@loremgaming.com</p>

         </div>
      </>
   );
}

export default LastView;