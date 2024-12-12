import React from 'react';
import Stars from './components/Stars';
import './styles.css';

const App: React.FC = () => {
  return (
    <div>
      <h1>Рейтинг фильма</h1>
      <Stars count={1} />
    </div>
  );
};

export default App;
