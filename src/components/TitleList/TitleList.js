import React from 'react';
import PropTypes from 'prop-types';

const TitleList = ({ title }) => {
    return (
        <div className='titlelist'>
            <div className='title-sentence'>{title}</div>
        </div>
    )
};

TitleList.propTypes = {
    title: PropTypes.string
};
export default TitleList;