'use strict';

var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
          <p>{this.props.text}</p>
        )
    }
});
