var Asteroidio = Asteroidio || {};

Asteroidio.Socket = function(enemy) {
	this.enemy = enemy;
	this.socket = io.connect('http://192.168.1.74');
 	this.socket.on('gamestate', this.updateState.bind(this));
};

Asteroidio.Socket.prototype.updateState = function(data) {
	this.enemy.mesh.position = data.position;
	this.enemy.mesh.rotation = data.rotation;
}

Asteroidio.Socket.prototype.replicate = function( state ) {
	this.socket.emit('playerstate', state);
}