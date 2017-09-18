import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component{
	
	onGreet(){
		alert("Hell!");
	};



	render() {
		var user = {
			name:"Melissa",
			hobies: ["Sports", "Reading" , "OD"]
		}

		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Header/>
					</div> 
				</div>
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Home name={"Max"} initialAge={27} user={user} greet={this.onGreet}/>
						
					</div> 
				</div>
			</div>
		);
	}
}

render(<App/>,window.document.getElementById('app'));