import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';

const ImageConfiance = ({ image }) => {
  return (
        <div className="confiance">
            <Image
                src={image} 
            />
        </div>
  );
};

ImageConfiance.propTypes = {
  image: PropTypes.string.isRequired,
};

export default ImageConfiance;
