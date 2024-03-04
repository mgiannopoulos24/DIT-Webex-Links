import React from 'react';
import fartButton from './assets/fart_button.png';
import fartSound from './assets/fart_sound.mp3';
import './FartButton.css';

const FartButton = () => {
    return (
        <div>
            <img src={fartButton} alt="Fart Button" className="fart-button" onClick={playFartSound}/>
        </div>
    );
}

function playFartSound() {
    var sound = new Audio(fartSound);
    sound.play();
}

export default FartButton;
