const React = require('react')
const io = require('socket.io-client')

const Header = require('./parts/Header')

const App = React.createClass({

	getInitialState() {
		return {
			status: 'disconnected',
			title: ''
		}
	},

	componentWillMount() {
	  this.socket = io()
	  this.socket.on('connect', this.connect)
	  this.socket.on('disconnect', this.disconnect)
	  this.socket.on('welcome', this.welcome)
	},

	disconnect() {
		this.setState({status: 'disconnected'})
	},

	connect() {
		this.setState({status: 'connected'})
	},

	welcome(serverState) {
		this.setState({title: serverState.title})
	},

	render () {
		return(
			<div>
				<Header title={this.state.title} status={this.state.status}/>
			</div>
		)
	}
})

module.exports = App