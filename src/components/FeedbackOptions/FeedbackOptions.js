import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const Feedback = ({ options, onLeaveFeedback }) => (
  <>
    {options.map(option => (
      <button
        className={styles.btn}
        key={option}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        {option.charAt(0).toUpperCase() + option.slice(1)}
      </button>
    ))}
  </>
);

Feedback.prototype = {
  good: PropTypes.func.isRequired,
  neutral: PropTypes.func.isRequired,
  bad: PropTypes.func.isRequired,
};

export default Feedback;

