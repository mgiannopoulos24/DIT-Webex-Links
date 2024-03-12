import React from 'react';
import FeedbackButton from './Feedback/FeedbackButton';
import Cat from "./Cat/Cat";
import Cookies from 'js-cookie';

const Footer = () => {
  const darkModeStatus = Cookies.get('darkMode') ;
  console.log(darkModeStatus);
  return (
    <footer className='footer'>
      <div style={{paddingLeft: "30px", height: "120px"}}>
        <Cat darkMode={darkModeStatus}/>
      </div>
      <p style={{display:"flex",justifyContent:"center"}}>&copy; {new Date().getFullYear()}&nbsp; <a href="https://github.com/mgiannopoulos24"> mgiannopoulos24</a>,&nbsp; <a href="https://github.com/kokkinos64">V. Kokkinos</a>. All rights reserved.</p>   
      <div style={{paddingRight: "30px"}}>
        <FeedbackButton />

      </div>
    </footer>
  );
}

export default Footer;