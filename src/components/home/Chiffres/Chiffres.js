import React from 'react';
import PropTypes from 'prop-types';

const Chiffres = ({ number1, number2 }) => {
  return (
    <div className="chiffre">
      <div className="chiffre__big">{number1}</div>
      <div className="chiffre__caption">{number2}</div>
    </div>
  );
};

Chiffres.propTypes = {
  number1: PropTypes.string,
  number2: PropTypes.string
};

export default Chiffres;
