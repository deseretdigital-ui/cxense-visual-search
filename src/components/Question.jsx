var React = require('react/addons');
var styles = require('../styles/styles');

var Question = React.createClass({
  render: function() {
    var clickHandlerChildren = this.addClickHandlerChildren();

    return (
      <div>
        <h2>{this.props.text}</h2>
        <div style={styles.answers}>
          {clickHandlerChildren}
        </div>
      </div>
    );
  },

  handleAnswerClick: function(answer) {
    this.props.onAnswerQuestion(answer);
  },

  addClickHandlerChildren: function() {
    return React.Children.map(this.props.children, function(child) {
      return React.addons.cloneWithProps(child, { onClick: this.handleAnswerClick.bind(this, child) })
    }, this);
  }
});

module.exports = Question;
