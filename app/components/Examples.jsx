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
      <p>Here are some few example locations to try!</p>
      <ol>
        <li>
          <Link to='/?location=New Delhi'><b>New Delhi, India</b></Link>
        </li>
        <li>
          <Link to='/?location=London'><b>London, Uk</b></Link>
        </li>
      </ol>
    </div>
  );
};
module.exports = Examples;
