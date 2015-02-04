var React = require('react/addons');

var Questions = React.createClass({
  getInitialState: function() {
    return {
      questionIndex: 0,
    }
  },

  getCurrentQuestion: function() {
    var index = 0;
    var question = null;

    React.Children.forEach(this.props.children, function(child) {
      if (index === this.state.questionIndex) {
        question = child;
      }
      index++;
    }, this);

    return question;
  },

  render: function() {
    return (
      <div>
        {this.addAnswerHandlers(this.getCurrentQuestion())}
      </div>
    );
  },

  handleQuestionAnswered: function(answer) {
    var newQuestionIndex = this.state.questionIndex + 1;
    if (newQuestionIndex >= React.Children.count(this.props.children)) {
      newQuestionIndex = 0;
    }

    this.setState({questionIndex: newQuestionIndex});

    this.props.onQuestionAnswered(answer);
  },

  addAnswerHandlers: function(question) {
    return React.addons.cloneWithProps(
      question,
      { onAnswerQuestion: this.handleQuestionAnswered }
    );
  }
});

module.exports = Questions;
