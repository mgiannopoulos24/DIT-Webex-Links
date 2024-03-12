import React from 'react';
import cat from './assets/cat.png';
import './Cat.css';

const Cat = ({ darkMode }) => {
    console.log(darkMode);
    return (
        <>
          {(darkMode === "enabled") && (
            <a href='https://www.instagram.com/dit_cats/'><img src={cat} alt="Cat Head" className="cat-head"/></a>
          )}
        </>
    );
};

export default Cat;