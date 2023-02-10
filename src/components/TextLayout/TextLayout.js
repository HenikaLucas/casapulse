import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * 
 * @props
 * direction [row, column]
 * 
 */
const TextLayout = ({title, text, direction='row', small = false}) => {
    return (
        <div className={classnames('textlayout__section', `textlayout__section__`+direction)}>
            <div className='textlayout__section__title'>
                    <p dangerouslySetInnerHTML={{__html: title}}></p>
            </div>         
            <div className={classnames('textlayout__section__text', small ? 'textlayout__section__text-small' : '')}>
                    <p dangerouslySetInnerHTML={{__html: text}}></p>
            </div>         
       </div>
    )
};

TextLayout.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    direction: PropTypes.string,
    small: PropTypes.bool,
};

export default TextLayout