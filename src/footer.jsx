import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p style={{display:"flex",justifyContent:"center"}}>&copy; {new Date().getFullYear()}&nbsp; <a href="https://github.com/mgiannopoulos24"> mgiannopoulos24</a>,&nbsp; <a href="https://github.com/kokkinos64">V. Kokkinos</a>. All rights reserved.</p>   
    </footer>
  );
}

export default Footer;