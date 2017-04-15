var React = require('react');
var {Link} =require('react-router');

var Examples = (props) => {

    return(
    <div>	
	<h1 classNAme = "text-center">Examples</h1>
    <p> Here are a few example location to try out </p>    
    <ol>
        <li>
           <Link to= '/?location=Pune'>Pune,India</Link>
        </li>
        <li>
            <Link to = '/?location=Delhi'>Delhi,India</Link> 
        </li>
    </ol>    
    </div> 

    )
};

module.exports = Examples;