import React from 'react';
import Stars from './components/Stars';

const App = () => {
  return (
    <div>
      <h1>Рейтинг фильма</h1>
      <Stars count={1} />
    </div>
  );
};

export default App;