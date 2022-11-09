import React, { Component } from "react";
import { Section } from './Section/Section.jsx'
import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions'

export class App extends Component {
  
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  constructor(props) {
    super(props)
    this.takeFeedback = takeFeedback.bind(this)
  }

  takeFeedback(event) {
    console.log(event.target)
  }

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={['Good', 'Neutral', 'Bad']} onLeaveFeedback={this.takeFeedback}/>
        </Section>
        <Section title="Statistics"></Section>
      </>
    );
  }
};
