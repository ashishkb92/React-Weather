var React = require('react');

/*var About = React.createClass({

 render : function (){

    

 }



}); */

var About = (props) => {

     return (
       <div>
       <h1 className = 'text-cener'>About</h1>
       <p>This is an app build by me</p>
       <p>Here are some tools i used.</p>
       <ul> 
           <li> <a href = "http://facebook.github.io/react">React</a> - This was the javascript framework used
           </li>
           <li>
           <a href ="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
           </li>
       </ul>
       </div>
    	);

};


module.exports = About;