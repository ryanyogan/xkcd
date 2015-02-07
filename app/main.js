/**
 * @jsx React.DOM
 */

var React        = require('react/addons');
var ReactApp     = React.createFactory(require('./components/ReactApp').ReactApp);
var domMountNode = document.getElementById('application-mount');

// We can get away with a simple renderComponent here
// because we are not using any client side routing.  Had
// we chosen to use client side routing we would need to
// determine if this was running on the browser or server.
React.renderComponent(new ReactApp({}), domMountNode);
