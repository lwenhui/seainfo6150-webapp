import React from 'react';
import PropTypes from 'prop-types';

import style from './ArticleImage.module.css';

const ArticleImage = ( {url, title} ) => (
    <img className={style.article_image} src={url} alt = {title}/>
);
ArticleImage.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default ArticleImage;