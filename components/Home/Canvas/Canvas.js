import React, { useState, useEffect } from 'react';

const Canvas = () => {
  const [text, setText] = useState('');
  const [cargo, setCargo] = useState('');
  
  const phrases = ['GUILHERME DANTAS'];

  useEffect(() => {
    let currentIndex = 0;
    let currentText = '';
    let interval;

    const type = () => {
      if (currentIndex < phrases.length) {
        currentText = phrases[currentIndex].substring(0, currentText.length + 1);
        setText(currentText);
        if (currentText === phrases[currentIndex]) {
          clearInterval(interval);
          // setTimeout(() => {
          //   interval = setInterval(erase, 50);
          // }, 5000);
        }
      } else {
        clearInterval(interval);
      }
    };

    const erase = () => {
      if (currentText.length > 0) {
        currentText = currentText.substring(0, currentText.length - 1);
        setText(currentText);
      } else {
        currentIndex = (currentIndex + 1) % phrases.length;
        clearInterval(interval);
        setTimeout(() => {
          interval = setInterval(type, 150);
        }, 500);
      }
    };

    interval = setInterval(type, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1>{text}</h1>
  );
};

export default Canvas;