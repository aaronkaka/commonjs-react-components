/** @jsx React.DOM */

var React  = require('react');
var Avatar = require('./Avatar.jsx');
var Bio    = require('./Bio.jsx');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="Profile">
                <h2 className="Profile-title">{this.props.username}</h2>
                <div className="Profile-body">
                    <Avatar imgSrc={this.props.avatar} />
                    <Bio text={this.props.bio} />
                </div>
            </div>
        )
    }
});
