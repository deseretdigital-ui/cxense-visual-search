var React = require('react/addons');
var $ = require('jquery');
var styles = require('../styles/styles');
require('../styles/clearfix.scss');

var VisualSearch = React.createClass({
  getInitialState: function() {
    return {
      searchResults: [],
      searchParams: [],
      loading: false
    }
  },

  firstSearchResult: function() {
    if (!this.state.searchResults > 0) {
      return null;
    }

    return this.state.searchResults[0];
  },

  updateSearchParams: function(answer, questionIndex) {
    var searchParamsClone = JSON.parse(JSON.stringify(this.state.searchParams));
    if (questionIndex === 0) {
      searchParamsClone = [];
    }

    if (answer.props.searchParam) {
      searchParamsClone.push(answer.props.searchParam);
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

    this.setState({loading: true});
    $.ajax({
      'url': 'http://deseret.cxsearch.cxense.com/api/search/marketplace-cars',
      'data': getString,
      'dataType': 'jsonp',
      'jsonpCallback': 'callback',
      'success': function(payload) {
        this.setState({
          loading: false,
          searchResults: payload.matches
        });
      }.bind(this)
    });
  },

  render: function() {
    return (
      <div className="clearfix" style={{position: 'relative'}}>
        <div style={styles.resultColumn}>
          <FeaturedResult
            result={this.firstSearchResult()}
            loading={this.state.loading}
          />
        </div>
        <div style={styles.questionsColumn}>
          <Questions onQuestionAnswered={this.updateSearchParams}>
            {this.props.children}
          </Questions>
        </div>
      </div>
    );
  }
});

module.exports = VisualSearch;
