require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./components/card.js');
var List = require('./components/list.js');
var Board = require('./components/board.js');




ReactDOM.render(

	<Board title="This is my Board"/>,document.getElementById('app')

	);

