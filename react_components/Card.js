'use strict';

var React  = require('react');
var Avatar = require('./Avatar.js');
var Bio    = require('./Bio.js');
var Alert  = require('./Alert.js');

module.exports = React.createClass({

    getInitialState: function () {
        return {
          data: this.props.data,
          evented: document.getElementById(this.props.data.eventedElem)
        }
    },

    deleteBio: function () {
      this.state.data.bio = '[deleted]';
      this.setState(this.state);
      if (this.state.evented) {
        this.state.evented.dispatchEvent(new CustomEvent('bioDeleted', {detail: this.state.data.username} ));
      }
    },

    deleteBioEventHandler:  function (e) {
      if (e.detail !== this.state.data.username) {
          this.state.alerts = e.detail + ' deleted their bio!';
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

        var data = this.state.data;

        return (
          <div className="panel panel-default cardComponent">
             <div className="panel-heading cardComponent"><h4 className="cardComponent">{data.username}</h4></div>
              <div className="panel-body cardComponent">
                <Avatar imgSrc={data.avatar || 'http://placehold.it/150x150'} />
                <div className="clearfix cardComponent"></div>
                <hr />
                <Bio text={data.bio} />
                <hr className="cardComponent" />
                <button className="btn btn-danger cardComponent" onClick={this.deleteBio}>Delete bio</button>
                <br /><br />
                <Alert text={this.state.alerts} />

                <form>
                  <div className="input-group cardComponent">
                    <div className="input-group-btn cardComponent">
                    <button className="btn btn-default cardComponent">+1</button><button className="btn btn-default cardComponent">s</button>
                    </div>
                    <input type="text" className="form-control" placeholder="Add a comment.." />
                  </div>
                </form>

              </div>
          </div>
        )
    }
});