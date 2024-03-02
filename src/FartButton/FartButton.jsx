import React from 'react';
import fartButton from './assets/fart_button.png';
import fartSound from './assets/fart_sound.mp3'; // import fart sound
import './FartButton.css';

const FartButton = () => {
    return (
        <div>
            {/* Remove the audio element from here */}
            <img src={fartButton} alt="Fart Button" className="fart-button" onClick={playFartSound}/>
        </div>
    );
}

function playFartSound() {
    var sound = new Audio(fartSound); // Create a new Audio object each time
    sound.play(); // Play the sound
}

export default FartButton;
