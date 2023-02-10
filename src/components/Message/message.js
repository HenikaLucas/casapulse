import React from 'react';
import PropTypes from 'prop-types';
import styles from './message.module.scss';


export default function Message({ type, content }) {
    return (
        <div className={styles[type]}>
            {content}
        </div>
    )
}

Message.propTypes = {
    type: PropTypes.string.isRequired,
    content: PropTypes.array.isRequired,
};