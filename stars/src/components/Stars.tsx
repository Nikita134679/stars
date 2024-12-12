import React from 'react';
import Star from './Star';

interface StarsProps {
  count?: number;
}

const Stars: React.FC<StarsProps> = ({ count = 0 }) => {
  if (typeof count !== 'number' || count < 1 || count > 5) {
    return null; // Если count некорректный, ничего не рендерим
  }

  return (
    <ul className="card-body-stars u-clearfix">
      {Array.from({ length: count }, (_, index) => (
        <Star key={index} />
      ))}
    </ul>
  );
};

export default Stars;
