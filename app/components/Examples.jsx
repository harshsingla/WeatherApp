var React = require('react');
var {Link} = require('react-router');

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
      <h1 className="text-center page-title text-color">Examples</h1>
      <p>Here are some fer example locations to try!</p>
      <ol>
        <li>
          <Link to='/?location=New Delhi'>New Delhi, India</Link>
        </li>
        <li>
          <Link to='/?location=London'>London, Uk</Link>
        </li>
      </ol>
    </div>
  );
};
module.exports = Examples;
