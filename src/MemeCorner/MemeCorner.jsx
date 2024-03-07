import React from 'react';
import FartButton from '../FartButton/FartButton';
import Button from '@mui/material/Button';
import './MemeCorner.css';

const MemeCorner = () => {
  return (
    <>
    <div className="MemeCorner">
      <header className="MemeCorner-header">
        <h1>MemeCorner</h1>
      </header>
      <div className="MemeCorner-content">
        
        <FartButton />
        <Button variant='contained' sx={{textTransform:'none'}} onClick={() => window.location.href = '/'}>Home</Button>
        
      </div>
      <footer className='MemeCorner-footer'>
        <p>Under Construction</p>
      </footer>  
    </div>
     
    </>
  );
}

export default MemeCorner;
