var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./list.js');
var Card = require('./card.js');
var ListContainer = require('./list-container.js');

var Board = React.createClass({ 

	onButtonClick:function(event){

		event.preventDefault();
		onAddSubmit()

	},
	render:function(props){

		// var lists = [<List title="to do" fn={this.onAddInputChanged} formSubmit={this.onAddSubmit} click={this.onAddSubmit}/>,
		// 			<List title="to dont"/>,
		// 			<List title="to whoever"/>];
			return(
				<div>
					<h1>{this.props.title}</h1>
					<List title="List 1" />
					<List title="List 2" />
					<List title="List 3" />
				</div>
			);
		}
});

module.exports = Board;


// Pass an onAddSubmit callback to the List component via props. When this is called it should add the contents of the text property of the state to the array of cards in the state.

// Update the Board component to render ListContainers rather than directly rendering Lists. You should now be able to add new cards to any of your lists.