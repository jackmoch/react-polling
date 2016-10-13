const React = require('react')
const io = require('socket.io-client')

const App = React.createClass({

	componentWillMount() {
	  this.socket = io()
	  this.socket.on('connect', this.connect)
	},

	connect() {
		console.log(`Connected on ${this.socket.id}`)
	},

	render () {
		return(
			<h1>Hello World</h1>
		)
	}
})

module.exports = App