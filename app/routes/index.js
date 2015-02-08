var React    = require('react/addons');
var ReactApp = React.createFactory(require('../components/ReactApp').ReactApp);

// This may seem a little strange, there are many ways
// to isomorphicly render React, this is the path of least
// resistance.  We are just rendering all of our components
// to a string and than we are going to say, hey if you hit /
// go a head and render the index.ejs file with all the JS server-
// side compiled
module.exports = function(app) {
  app.get('/', function(req, res) {
    var htmlToRender = React.renderToString(ReactApp({}));
    res.render('index.ejs', {reactOutput: htmlToRender});
  });
};
