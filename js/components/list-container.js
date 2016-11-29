var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./list.js');
var Card = require('./card.js');

var ListContainer = React.createClass({
	getInitialState:function(){
		return{

			inputText:'',
			cardsArray:[]
		}

	},
	render:function(props){
		return(

				<div>
					<List title={this.state.cardsArray} fn={this.props.onAddInputChanged} click={this.props.onAddSubmit}/>
				</div>
		);
	}
});

module.exports = ListContainer;

// Pass an onAddSubmit callback to the List component via props. When this is called it should add the contents of the text property of the state to the array of cards in the state.

// The render method should render a List component, passing in the array of cards from the state as the cards prop.

// Pass an onAddSubmit callback to the List component via props. When this is called it should add the contents of the text property of the state to the array of cards in the state.

// Update the Board component to render ListContainers rather than directly rendering Lists. You should now be able to add new cards to any of your lists.