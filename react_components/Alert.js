'use strict';

var React = require('react');

module.exports = React.createClass({
    render: function() {
      if (this.props.text) {
        return (
          <div className="alert alert-info">
              <a href="#" className="close" data-dismiss="alert">&times;</a>
              {this.props.text}
          </div>
        )
      } else {
        return false;
      }
    }
});
