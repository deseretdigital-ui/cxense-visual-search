var React = require('react/addons');
var styles = require('../styles/styles');
var ReactIntl = require('react-intl');
var FormattedNumber = ReactIntl.FormattedNumber;

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
    var loading = this.renderLoadingDisplay()
    var url = 'http://ksl.com/auto/listing/' + fields.id;

    return (
      <div>
        {loading}
        <h1 style={styles.carTitle}>
          <a href={url} className="carLink" target="_blank">
            {fields.makeYear} {fields.make} {fields.model}
          </a>
        </h1>
        <h2 style={styles.miles}>
          Miles:&nbsp;
          <FormattedNumber value={fields.mileage} />
        </h2>
        <h2 style={styles.price}>
          <FormattedNumber value={fields.price} style="currency" currency="USD" />
        </h2>
        <hr style={styles.hr} />
        <p>{fields.description}</p>
      </div>
    );
  },

  renderNoResult: function() {
    var loading = this.renderLoadingDisplay();

    return (
      <div>
        {loading}
        <h1>No results</h1>
        <p>I haven't done any searches yet.</p>
      </div>
    );
  },

  renderLoadingDisplay: function() {
    if (!this.props.loading) {
      return null;
    }

    return (
      <div style={styles.loading}>
        Loading...
      </div>
    );
  }
});

module.exports = FeaturedResult;
