import React, { useState } from 'react';
import './App.css';

const COLORS = ['pink', 'blue', 'yellow', 'green', 'purple'];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
  };

  return (
    <div className='app' style={{ backgroundColor }}>
      {COLORS.map((color) => (
        <button
          key={color}
          onClick={onButtonClick(color)} // Pass a reference to onButtonClick
          className={backgroundColor === color ? 'selected' : ''}
        >
          {color}
        </button>
      ))}
    </div>
  );
}

export default App;
