import React from 'react';
// import s from './Feedback.module.css'
import PropTypes from 'prop-types';
class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleBtnGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  handleBtnNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  handleBtnBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };
  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <button type="button" onClick={this.handleBtnGood}>
          Good
        </button>
        <button type="button" onClick={this.handleBtnNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.handleBtnBad}>
          Bad
        </button>

        <h3>Statiatics</h3>
        <div>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
        </div>
      </div>
    );
  }
}
Feedback.propTypes = {
  state: PropTypes.arrayOf(
    PropTypes.shape({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    }),
  ),
};

export default Feedback;
