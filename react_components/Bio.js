'use strict';

var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
          <p className="cardComponent">{this.props.text}</p>
        )
    }
});
