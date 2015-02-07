/**
 * @jsx React.DOM
 */

var React = require('react/addons');

// The alternative in ES6 is so awesome but I didn't
// want to complicate things with --harmony (0.11.x)
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
