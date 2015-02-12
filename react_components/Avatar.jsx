/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
    render: function() {
      return (
        <img src={this.props.imgSrc} className="img-circle pull-right" />
      )
    }
});
