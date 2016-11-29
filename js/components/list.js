var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./card.js');

var List = React.createClass({
	render:function(props){
		return(
			<div>
				<h1>{this.props.title}</h1>

				<Card text="card 1"/>
				<Card text="card 2"/>
				<Card text="card 3"/>

				<form onSubmit={this.props.formSubmit}>
					<input type="text"onChange={this.props.fn}/>
					<button onSubmit={this.props.click}>Submit</button>
				</form>
			</div>

		);
	}
});

module.exports = List;


// Add a ListContainer component to your Trello app which stores the list of cards in its state, and allows you to add new cards to the list.

// Create a new stateful component called ListContainer in js/components/list-container.js.

// Give the component two pieces of initial state:

// The text entered into the input (which should start as an empty string)

// The cards contained in the list (which should start as an empty array)

// The render method should render a List component, passing in the array of cards from the state as the cards prop.

// Pass an onAddInputChanged callback to the List component via props. When this is called it should update the text property of the state.

// Pass an onAddSubmit callback to the List component via props. When this is called it should add the contents of the text property of the state to the array of cards in the state.

// Update the Board component to render ListContainers rather than directly rendering Lists. You should now be able to add new cards to any of your lists.