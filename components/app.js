const React = require('react')
const io = require('socket.io-client')

const Header = require('./parts/Header')

const App = React.createClass({

	getInitialState() {
		return {
			status: 'disconnected'
		}
	},

	componentWillMount() {
	  this.socket = io()
	  this.socket.on('connect', this.connect)
	},

	connect() {
		this.setState({status: 'connected'})
	},

	render () {
		return(
			<div>
				<Header title="New Header" status={this.state.status}/>
			</div>
		)
	}
})

module.exports = App