import React from 'react';
import PropTypes from 'prop-types';

import style from './ArticleListItem.module.css';
import ArticleImage from './ArticleImage';
import * as DateUtil from '../util/DateUtil';

class ArticleListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: false
        };
    }

    render() {
        return (
            <div className={style.single_list_item}>
                <div className={style.image}>
                    <ArticleImage
                        url={`/images/${this.props.title.slice(0, 15)}.jpg`}
                        title={this.props.title}
                    />
                </div>
                <div className={style.content}>
                    <div>
                        <div className={style.title}>{this.props.title}</div>
                        <section className={style.short_text}>
                            {this.props.shortText}
                        </section>
                    </div>
                    <div className={style.time_author}>
                        <address className={style.author}>By: {this.props.author}</address>
                        <time className={style.time} dateTime={DateUtil.getTimeDateInISOFormat(this.props.date)}>
                            {this.props.date}
                        </time>
                    </div>
                </div>
            </div>

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