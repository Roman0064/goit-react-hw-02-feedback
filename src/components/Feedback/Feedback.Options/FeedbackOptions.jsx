import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
      <div className={css.feedbackOption}>
        {options.map((option) => (
          <button key={option} onClick={() => onLeaveFeedback(option)} className={css.button}>
            {option}
          </button>
        ))}
      </div>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

