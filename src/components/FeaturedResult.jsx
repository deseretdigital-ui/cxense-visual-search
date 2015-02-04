var React = require('react/addons');

var FeaturedResult = React.createClass({
  render: function() {
    if (this.props.result) {
      return this.renderResult();
    } else {
      return this.renderNoResult();
    }
  },

  renderResult: function() {
    var fields = this.props.result.document.fields;

    return (
      <div>
        <h1>{fields.makeYear} {fields.make} {fields.model}</h1>
        <h2>${fields.price}</h2>
        <h2>{fields.mileage} miles</h2>
        <p>{fields.description}</p>
      </div>
    );
  },

  renderNoResult: function() {
    return (
      <div>I haven't done any searches yet.</div>
    );
  }
});

module.exports = FeaturedResult;
