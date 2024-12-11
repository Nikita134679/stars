import React from 'react';
import PropTypes from 'prop-types';
import Star from '../Star';

const Stars = ({ count = 0 }) => {
  if (typeof count !== 'number' || count < 1 || count > 5) {
    return null;
  }

  const starsArray = Array.from({ length: count }, (_, index) => (
    <Star key={index} />
  ));

  return <ul className="card-body-stars u-clearfix">{starsArray}</ul>;
};

Stars.propTypes = {
  count: PropTypes.number,
};

export default Stars;