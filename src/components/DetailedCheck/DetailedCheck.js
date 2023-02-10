import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CheckList from '../CheckList/CheckList';

const StyleWrapper = styled.div`
    .list .list__item {
        margin-bottom: 0;

        .list__text {
            font-family: 'Sora SemiBold';
        }
    }
`

const DetailedCheck = ({check, theme, paragraph, listesub}) => {
    return (
        <StyleWrapper>
            <CheckList list={check} theme={theme}/>
            <p className='sub-paragraph'>{paragraph}</p>
            {listesub?.map(item => (
                <p key={item} className='liste-paragraph'>{item}</p>
            ))}
        </StyleWrapper>
    )
};

DetailedCheck.propTypes = {
    check: PropTypes.object,
    theme: PropTypes.string,
    paragraph: PropTypes.string,
    listesub: PropTypes.array
};

export default DetailedCheck;