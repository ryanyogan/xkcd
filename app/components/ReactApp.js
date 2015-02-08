/**
 * @jsx React.DOM
 */

var React = require('react/addons');

var ReactApp = React.createClass({
  componentDidMount: function() {
    console.log("Looks to be working...");
  },

  render: function() {
    return (
      <div className='container'>
        Hello from React...
      </div>
    );
  }
});

module.exports.ReactApp = ReactApp;
