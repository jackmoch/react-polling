const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.set('port', port)
app.use(express.static('./public'))

const server = app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})

const io = require('socket.io').listen(server)

io.on('connection', (socket) => {
	console.log(`Listening on ${socket.id}`)
})