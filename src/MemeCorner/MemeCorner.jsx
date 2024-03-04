import React from 'react';
import './MemeCorner.css';
import FartButton from '../FartButton/FartButton';
import Button from '@mui/material/Button';

const MemeCorner = () => {
  return (
    <>
    <div className="MemeCorner">
      <h1>MemeCorner</h1>
      <div className="button-row">
        <FartButton />
        <Button variant='contained' sx={{textTransform:'none'}} onClick={() => window.location.href = '/'}>Home</Button>
      </div>
    </div>
    <div className='description'>
        <p>Under Construction</p>
    </div>   
    </>
  );
}

export default MemeCorner;
