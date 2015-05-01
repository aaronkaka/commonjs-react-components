'use strict';

var React = require('react');

module.exports = React.createClass({
    render: function() {
      if (this.props.text) {
        return (
          <div className="alert alert-info cardComponent">
              <a href="#" className="close cardComponent" data-dismiss="alert">&times;</a>
              {this.props.text}
          </div>
        )
      } else {
        return false;
      }
    }
});
