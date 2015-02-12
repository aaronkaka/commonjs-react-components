/** @jsx React.DOM */

var React  = require('react');
var Avatar = require('./Avatar.jsx');
var Bio    = require('./Bio.jsx');

module.exports = React.createClass({

    getInitialState: function () {
        return {
          details: this.props.details,
          evented: document.getElementById(this.props.details.eventedElem)
        }
    },

    deleteBio: function () {
      this.state.details.bio = '[deleted]';
      this.setState(this.state);
      this.state.evented.dispatchEvent(new CustomEvent('bioDeleted', {detail: this.state.details.username} ));
    },

    deleteBioEventHandler:  function (e) {
      if (e.detail !== this.state.details.username) {
          this.state.alerts = '>>> ' + e.detail + ' deleted their bio! <<<';
          this.setState(this.state);
      }
    },

    componentDidMount: function () {
        this.state.evented.addEventListener('bioDeleted', this.deleteBioEventHandler);
    },

    componentWillUnmount: function () {
        this.state.evented.removeEventListener('bioDeleted', this.deleteBioEventHandler);
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
                <br /><h5>{this.state.alerts}</h5>
            </div>
        )
    }
});