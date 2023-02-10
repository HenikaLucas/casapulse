import React from 'react';
import PropTypes from 'prop-types';
import CheckList from '../CheckList/CheckList';


const ImageText = ({image, text, list, listTheme='light'}) => {
  return (
    <div className='image-text'>
      <div className='image-text__left'>
        <img src={image}></img>
      </div>
      <div className='image-text__right'>
        <div className='image-text__right__top'>
          <p dangerouslySetInnerHTML={{__html: text}}></p>
        </div>
        <div className='image-text__right__bottom'>
          <CheckList
              list={list}
              theme={listTheme}
          />
        </div>
      </div>
    </div>
  );
};

ImageText.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string,
  list: PropTypes.array,
  listTheme: PropTypes.string,
};

export default ImageText;
