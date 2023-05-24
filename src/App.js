import React, { useState } from 'react';

const Square = ({ color, onClick }) => {
  return (
    <div
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: color,
        margin: '10px',
      }}
      onClick={onClick}
    />
  );
};

const App = () => {
  const [color1, setColor1] = useState('blue');
  const [color2, setColor2] = useState('red');

  const handleClick = () => {
    setColor1(color1 === 'red' ? 'blue' : 'red');
    setColor2(color2 === 'red' ? 'blue' : 'red');
  };

  return (
    <div>
      <Square color={color1} onClick={handleClick} />
      <Square color={color2} onClick={handleClick} />
    </div>
  );
};

export default App;