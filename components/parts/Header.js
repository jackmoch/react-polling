const React = require('react')

const Header = React.createClass({

	propTypes: {
		title: React.PropTypes.string.isRequired
	},

	getDefaultProps() {
		return {
			status: 'disconnected'
		}
	},

	render() {
		return(
			<header>
				<h1>{this.props.title}</h1>
			</header>
		)
	}
})

module.exports = Header