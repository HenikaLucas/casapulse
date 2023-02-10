import React from 'react';
import PropTypes from 'prop-types';


const Caption = ({text}) => {
    return (
        <div className='captionProp'>
            <div className='captionProp__text'>
                {text}
            </div>
        </div>
    )
};

Caption.propTypes = {
    text: PropTypes.string
};

export default Caption;