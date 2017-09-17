import React from "react";

export class Home extends React.Component{
	
	constructor(props){
		super();
		this.state = {
			age: props.initialAge,
			status:0
		};

		setTimeout(() => {
            this.setState({
                status: 1
            });
        },3000);
    }

	onMakeOlder(){
		this.setState({
			age: this.state.age + 3
		});	
	}

	render(){
		return(
			<div>
				<p>In a new Component!</p>
				<p>Your name is {this.props.name} ,your age is {this.state.age}</p>
				<ul>
				{this.props.user.hobies.map((hobby,i) => <li key={i}>{hobby}</li>)}
				</ul>
				<p>Status: {this.state.status}</p>

				<hr/>
				<button onClick={()=> this.onMakeOlder()} className="btn btn-primary">Make Me Older</button>
				<button onClick={this.props.greet} className="btn btn btn-primary">Try!</button>
			</div>
		);
	}
}

Home.propTypes = {
	name: React.PropTypes.string,
	initialAge: React.PropTypes.number,
	greet: React.PropTypes.func
}