import React from 'react';
import PropTypes from 'prop-types';

const ContentList = ({ content }) => {
    return (
        <div className='contentlist'>
            {content.map(item => (
                <div key={item} className='paragraphe'>
                    <p dangerouslySetInnerHTML={{__html: item}}></p>
                </div>
            ))}
        </div>
    )
};

ContentList.propTypes = {
    content: PropTypes.array
};
export default ContentList;