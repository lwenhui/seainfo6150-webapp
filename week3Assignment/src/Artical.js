import React from 'react';
import PropTypes from 'prop-types';

const Artical = ({title, date, author, children}) => (
    <article>
        <header>
            <h1>{title}</h1>
            <p>By {author}. Published <time dateTime='2018-11-22'>{date}</time></p>
        </header>
        <section>
            {children}
        </section>
    </article>
);

Artical.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    children: PropTypes.array.isRequired,
};

export default Artical;
