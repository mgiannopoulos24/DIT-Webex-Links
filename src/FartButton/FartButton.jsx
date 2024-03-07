import React from 'react';
import fartSound from './assets/fart_sound.mp3';
import './FartButton.css';
import { Button } from '@mui/material';

const FartButton = () => {
    return (
        <Button variant="contained" className="fart-button" onClick={playFartSound}>Fart<br/>Button</Button>               
    );
}

function playFartSound() {
    var sound = new Audio(fartSound);
    sound.play();
}

export default FartButton;
