var React = require('react/addons');
var styles = require('../styles/styles');

var Answer = React.createClass({
  render: function() {
    return (
      <a onClick={this.props.onClick} style={styles.answer}>
        {this.props.children}
      </a>
    );
  }
});

module.exports = Answer;
