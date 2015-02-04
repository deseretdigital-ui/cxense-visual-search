var React = require('react/addons');
var $ = require('jquery');

var VisualSearch = React.createClass({
  getInitialState: function() {
    return {
      searchResults: [],
      searchParams: []
    }
  },

  firstSearchResult: function() {
    if (!this.state.searchResults > 0) {
      return null;
    }

    return this.state.searchResults[0];
  },

  updateSearchParams: function(answer) {
    var searchParamsClone = JSON.parse(JSON.stringify(this.state.searchParams));
    if (answer.props.query) {
      searchParamsClone.push(answer.props.query);
    }

    if (answer.props.filter) {
      searchParamsClone.push(answer.props.filter);
    }

    this.setState({
      searchParams: searchParamsClone
    }, this.performSearch);
  },

  performSearch: function() {
    var getString = {
      'media': 'javascript',
    };
    if (this.state.searchParams.length > 0) {
      getString['p_aq'] = this.state.searchParams.join(' and ');
    }

    $.ajax({
      'url': 'http://deseret.cxsearch.cxense.com/api/search/marketplace-cars',
      'data': getString,
      'dataType': 'jsonp',
      'jsonpCallback': 'callback',
      'headers': {
        'Accept': 'application/javascript'
      },
      'success': function(payload) {
        this.setState({searchResults: payload.matches});
      }.bind(this)
    });
  },

  render: function() {
    return (
      <div>
        <FeaturedResult result={this.firstSearchResult()} />
        <Questions onQuestionAnswered={this.updateSearchParams}>
          {this.props.children}
        </Questions>
      </div>
    );
  }
});

module.exports = VisualSearch;
