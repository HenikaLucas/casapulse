import React from 'react';
import PropTypes from 'prop-types';

const SubTitleList = ({ subtitle }) => {
    return (
        <div className='subtitle'>
            <div className='subtitle-sentence'>{subtitle}</div>
        </div>
    )
};

SubTitleList.propTypes = {
    subtitle: PropTypes.string
};
export default SubTitleList;