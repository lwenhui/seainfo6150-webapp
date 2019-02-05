import React from 'react';
import PropTypes from 'prop-types';

class ArticleTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }
    // this.onClick.bind(this)

  onClick() {
    this.setState({
      selected: !this.state.selected
    });
  }

  getTimeDate(timeString) {
    const date = new Date(timeString);
    return date.toISOString();
  }
  getDate(timeString) {
    const date = new Date(timeString);
    return date.toLocaleDateString();
  }

  render() {

    let selectedStatus;
    if (this.state.selected) {
      selectedStatus = 'Yes';
    }
    else {
      selectedStatus = 'No';
    }

    // paste this onClick handler into your checkbox;
    // you should not have to modify this code in any way
    // onClick={this.onClick.bind(this)}
    //
    return (
        <tr>
          <td>
            <input
              name="articleRow"
              type="checkbox"
              checked = {this.state.selected}
              onChange = {this.onClick.bind(this)}
            />
          </td>
          <td>{selectedStatus}</td>
          <td>{this.props.author}</td>
          <td>
            <time dateTime={this.getTimeDate(this.props.date)}>
              {this.getDate(this.props.date)}
            </time>
          </td>
          <td>
            <section>
              {this.props.shortText}
            </section>
          </td>
        </tr>
    );
  }

}

ArticleTableRow.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  shortText: PropTypes.string.isRequired
};

export default ArticleTableRow;
