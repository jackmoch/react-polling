const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const connections = []

app.set('port', port)
app.use(express.static('./public'))

const server = app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})

const io = require('socket.io').listen(server)

io.on('connection', (socket) => {
	connections.push(socket)
	console.log(`Listening on ${socket.id}, ${connections.length} connections remaining`)

	socket.once('disconnect', () => {
		connections.splice(connections.indexOf(socket), 1)
		socket.disconnect()
		console.log(`Socket ${socket.id} disconnected ${connections.length} connections remaining`)
	})

})