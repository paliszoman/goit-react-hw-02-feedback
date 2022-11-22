import React, { Component } from "react";
import { Section } from './Section/Section.jsx'
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions'
import {Statistica} from './Statistica/Statistica.jsx'

export class App extends Component {
  
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  takeFeedback(event) {
    if (event.target.textContent === "Good") { this.setState(state => { return { goodCount: state.goodCount + 1 } }) }
    if (event.target.textContent === "Neutral") { this.setState(state => { return { neutralCount: state.neutralCount + 1 } }) }
    if (event.target.textContent === "Bad") { this.setState(state => { return { badCount: state.badCount + 1 } }) }
  }

  countTotalFeedback() { return this.state.goodCount + this.state.neutralCount + this.state.badCount }

  countPositiveFeedbackPercentage() {
      if(this.countTotalFeedback()===0){return 0} 
      return this.state.goodCount / this.countTotalFeedback() //precentage value as number
  }

  constructor(props) {
    super(props)
    this.takeFeedback = this.takeFeedback.bind(this)
    this.countTotalFeedback = this.countTotalFeedback.bind(this)
    this.countPositiveFeedbackPercentage = this.countPositiveFeedbackPercentage.bind(this)
  
  }

  state = {
    goodCount: this.props.good,
    neutralCount: this.props.neutral,
    badCount: this.props.bad
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={['Good', 'Neutral', 'Bad']} onLeaveFeedback={this.takeFeedback} />
        </Section>
        <Section title="Statistics">
          <Statistica good={this.state.goodCount} neutral={this.state.neutralCount} bad={this.state.badCount} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
        </Section>
      </>
    );
  }
}