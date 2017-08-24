var React = require('react');

//var About = React.createClass({
//  render: function () {
//    return (
//      <h3>About component</h3>
//});

var About = (props) => {
  return (
    <div>
      <h2 className="text-center page-title text-color">About</h2>
      <p>This is a weather application build on React.</p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
           <a href="https://facebook.github.io/react" target="_blank"><b>React</b></a> - This is a javacript framework.
        </li>
        <li>
          <a href="http://openweathermap.org" target="_blank"><b>Open Weather Map</b></a> - I used the Open Weather Map API
            to search for weather data by city name.
        </li>
      </ul>
      <div >
        <p className="text-center">Made by - <b className="bold">Shubham Chinda</b>!</p>
        <ul>
          <li>
            <a href="https://github.com/Shubhamchinda" target="_blank"><b>Github Profile</b>
              </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
module.exports = About;
