var React = require('react/addons');

var Answer = React.createClass({
  render: function() {
    return (
      <a onClick={this.props.onClick} style={{'display': 'block', 'margin': 5, paddingTop: 40, 'width': 100, 'height': 60, textAlign: 'center', backgroundColor: 'dodgerblue', color: 'white', 'cursor': 'pointer'}}>
        {this.props.children}
      </a>
    );
  }
});

module.exports = Answer;
