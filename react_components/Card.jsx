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
      if (this.state.evented) {
        this.state.evented.dispatchEvent(new CustomEvent('bioDeleted', {detail: this.state.details.username} ));
      }
    },

    deleteBioEventHandler:  function (e) {
      if (e.detail !== this.state.details.username) {
          this.state.alerts = '>>> ' + e.detail + ' deleted their bio! <<<';
          this.setState(this.state);
      }
    },

    componentDidMount: function () {
      if (this.state.evented) {
        this.state.evented.addEventListener('bioDeleted', this.deleteBioEventHandler);
      }
    },

    componentWillUnmount: function () {
      if (this.state.evented) {
        this.state.evented.removeEventListener('bioDeleted', this.deleteBioEventHandler);
      }
    },

    render: function() {

        var detail = this.state.details;

        return (
          <div className="panel panel-default">
             <div className="panel-heading"><h4>{detail.username}</h4></div>
              <div className="panel-body">
                <Avatar imgSrc={detail.avatar || 'http://placehold.it/150x150'} />
                <div className="clearfix"></div>
                <hr />
                <Bio text={detail.bio} />
                <hr />
                <button className="btn btn-danger" onClick={this.deleteBio}>Delete bio</button>
                <br /><h5>{this.state.alerts}</h5>

                <form>
                  <div className="input-group">
                    <div className="input-group-btn">
                    <button className="btn btn-default">+1</button><button className="btn btn-default"><i className="glyphicon glyphicon-share"></i></button>
                    </div>
                    <input type="text" className="form-control" placeholder="Add a comment.." />
                  </div>
                </form>

              </div>
          </div>
        )
    }
});