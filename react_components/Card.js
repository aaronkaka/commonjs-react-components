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
          <div className="panel panel-default">
             <div className="panel-heading"><h4>{data.username}</h4></div>
              <div className="panel-body">
                <Avatar imgSrc={data.avatar || 'http://placehold.it/150x150'} />
                <div className="clearfix"></div>
                <hr />
                <Bio text={data.bio} />
                <hr />
                <button className="btn btn-danger" onClick={this.deleteBio}>Delete bio</button>
                <br /><br />
                <Alert text={this.state.alerts} />

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