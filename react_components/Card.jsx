/** @jsx React.DOM */

var React  = require('react');
var Avatar = require('./Avatar.jsx');
var Bio    = require('./Bio.jsx');

module.exports = React.createClass({

    getInitialState: function () {
        return {
          eventedElem: document.getElementById('eventedElement'),
          details: this.props.details
        }
    },

    deleteBio: function () {
      this.state.details.bio = '[deleted]';
      this.setState(this.state);
      this.state.eventedElem.dispatchEvent(new CustomEvent('bioDeleted', {detail: this.state.details.username} ));
    },

    deleteBioHandler:  function (e) {
      if (e.detail !== this.state.details.username) {
          this.state.alerts = '>>> ' + e.detail + ' deleted their bio! <<<';
          this.setState(this.state);
      }
    },

    componentDidMount: function () {
        this.state.eventedElem.addEventListener('bioDeleted', this.deleteBioHandler);
    },

    componentWillUnmount: function () {
        this.state.eventedElem.removeEventListener('bioDeleted', this.deleteBioHandler);
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