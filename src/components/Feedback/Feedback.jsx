import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions'
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';
import css from './Css/Feedback.module.css'

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleFeedback = (type) => {
    this.setState((prevState) => ({
      ...prevState,
      [type]: prevState[type] + 1
    }));
  };
 
  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = good + neutral + bad;
    const countPositiveFeedbackPercentage = countTotalFeedback === 0 ? 0 : Math.round((good / countTotalFeedback) * 100);
  
    return (
      <div className={css.root}>
        <Section title="Please leave your feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.handleFeedback} />
        </Section>
  
        <Section title="Statistics">
          {countTotalFeedback === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics 
            good={good} 
            neutral={neutral} 
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage} />
          )}
        </Section>
      </div>
    );
  };
};

export default Feedback;

