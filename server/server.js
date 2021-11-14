// JavaScript source code
const io = require('socket.io')(3000, {
	cors: {
		origin: ["http://localhost:8080"],
		credentials: true,

	},
})

io.on("connection", socket => {
	console.log('user connected with ID' + socket.id)
})