import React from 'react';
import PropTypes from 'prop-types';

import style from './ArticleListItem.module.css'

class ArticleListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: false
        };
    }

    getTimeDate(timeString) {
        const date = new Date(timeString);
        return date.toISOString();
    }

    render() {

        return (
            <li className={style.singleListItem}>
                <div className={style.title}>{this.props.title}</div>
                <section className={style.short_text}>
                    {this.props.shortText}
                </section>
                <div className={style.time_author}>
                    <address className={style.author}>By: {this.props.author}</address>
                    <time className={style.time} dateTime={this.getTimeDate(this.props.date)}>
                        {this.props.date}
                    </time>
                </div>
            </li>

        );
    }
}

ArticleListItem.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    shortText: PropTypes.string.isRequired
};

export default ArticleListItem;