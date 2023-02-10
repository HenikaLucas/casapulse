import React from 'react';
import PropTypes from 'prop-types';

const Title = ({titre, paragraph}) => {
  return (
    <div className="solution__title">
      <h2 dangerouslySetInnerHTML={{'__html': titre}}></h2>
      <p dangerouslySetInnerHTML={{'__html': paragraph}}>
      </p>
    </div>
  );
};

Title.propTypes = {
  titre: PropTypes.string,
  paragraph: PropTypes.string
};

export default Title;
