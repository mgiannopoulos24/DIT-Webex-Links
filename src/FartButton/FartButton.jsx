import React from 'react';
import fartSound from './assets/fart_sound.mp3';
import './FartButton.css';
import { Button } from '@mui/material';

const FartButton = () => {
    return (
            <Button style={{fontSize:12}}className="arcade-button" onClick={playFartSound}>Fart Button</Button>               
    );
}

function playFartSound() {
    var sound = new Audio(fartSound);
    sound.play();
}

export default FartButton;
