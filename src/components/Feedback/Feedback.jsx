import React, { Component } from 'react';
import FeedbackOptions from './Feedback.Options/FeedbackOptions'
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import css from './Feedback.module.css'

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

  getCountTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  getCountPositiveFeedBack() {
    const countTotalFeedback = this.getCountTotalFeedback();
    return countTotalFeedback === 0 ? 0 : Math.round((this.state.good / countTotalFeedback) * 100);
  };
 
  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const countTotalFeedback = this.getCountTotalFeedback();
    const countPositiveFeedbackPercentage = this.getCountPositiveFeedBack();
  
    return (
      <div className={css.root}>
        <Section title="Please leave your feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.handleFeedback} />
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

