var Asteroidio = Asteroidio || {};

Asteroidio.Socket = function() {
	this.socket = io.connect('http://localhost');
 	this.socket.on('news', function (data) {
    console.log(data);
    this.socket.emit('my other event', { my: 'HELLLOOOO' });
  });
};

Asteroidio.Socket.prototype.replicate = function( state ) {
	this.socket.emit('gamestate', { data: state });
}