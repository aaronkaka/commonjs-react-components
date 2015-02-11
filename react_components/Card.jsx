/** @jsx React.DOM */

var React  = require('react');
var Avatar = require('./Avatar.jsx');
var Bio    = require('./Bio.jsx');

module.exports = React.createClass({

    getInitialState: function () {
        return {
          details: this.props.details
        }
    },

    deleteBio: function () {
      this.state.details.bio = '';
      this.setState(this.state);
    },

    render: function() {

        var detail = this.state.details;

        return (
            <div className="Profile">
                <h2 className="Profile-title">{detail.username}</h2>
                <div className="Profile-body">
                    <Avatar imgSrc={detail.avatar} />
                    <Bio text={detail.bio} />
                </div>
                <button onClick={this.deleteBio}>Delete bio</button>
            </div>
        )
    }
});