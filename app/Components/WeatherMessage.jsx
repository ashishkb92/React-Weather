var React = require('react');


/*var WeatherMessage = React.createClass({

 render : function (){

    return (
       <div>
       <h2>Weather in {this.props.location} is {this.props.temp} </h2>
       
        </div>
    	);

 }



});*/
var WeatherMessage = (props) => {

    return (
       <div>
       <h3 className = "text-center">Weather in {props.location} is {props.temp} </h3>
       
        </div>
    	);

 };
module.exports = WeatherMessage;