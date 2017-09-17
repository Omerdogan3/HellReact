import React from "react";

export const Header = (props)=> {
	return(
		<nav className="navbar navbar-inverse">
		  <div className="container">
		    <div className="navbar-header">
		      <a className="navbar-brand" href="#">ReactJs</a>
		    </div>
		    <ul className="nav navbar-nav">
		      <li className="active"><a href="#">Home</a></li>
		      <li><a href="#">Page 1</a></li>
		      <li><a href="#">Page 2</a></li>
		      <li><a href="#">Page 3</a></li>
		    </ul>
		  </div>
		</nav>
	);
};