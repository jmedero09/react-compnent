var React = require('react');
var ReactDOM = require('react-dom');

var Card = React.createClass({
	render:function(props){
		return(
			<div>
				<h4>{this.props.text}</h4>
			</div>
		);
	}
}); 

module.exports = Card;