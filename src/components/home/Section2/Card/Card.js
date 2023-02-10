import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
const Card = ({titre, texte, href = '', date = '' , image = '', animated = false, article = false}) => {
  return (
    <div className="solutionCard">
      <div className="solutionCard__content">
        <div className="solutionCard__content__main">
          <div className="solutionCard__content__image">
            {image && <img src={image} alt={titre} ></img>}
          </div>
          <div className={["solutionCard__content__title", image !=='' ?  'solutionCard__content__title__image' : ''].join(' ')}>
            {article ? <span><Link href={''+href}>{titre}</Link></span> : <span>{titre}</span>}
            <div className="solutionCard__content__date">
              {date}
            </div>
          </div>
          <div className="solutionCard__content__text">
           {texte}
          </div>
        </div>
        <Link href={''+href}>
          <div className={["solutionCard__content__footer", animated ?  "solutionCard__content__footer__animated" : ''].join(' ')}>
            <div className='green-background'></div>
            <h3>{article ? 'LIRE L\'ARTICLE': 'EN SAVOIR PLUS'}</h3>
            <span className="sign"></span>
            </div>
        </Link>
      </div>
    </div>
  );
};

Card.propTypes = {
  titre: PropTypes.string,
  texte: PropTypes.string,
  href: PropTypes.string,
  date: PropTypes.string,
  image: PropTypes.string,
  animated: PropTypes.bool,
  article: PropTypes.bool,
};

export default Card;
