var React = require('react');

//var Examples = React.createClass({
//  render: function () {
//    return (
//      <h4>Examples component</h4>
//    );
//  }
//  });

var Examples = (props) => {
  return (
    <div>
      <h4>Examples</h4>
      <p>Welcome to example page.</p>
    </div>
  );
};
module.exports = Examples;
