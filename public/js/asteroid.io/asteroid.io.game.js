var Asteroidio = Asteroidio || {};

Asteroidio.Game = function() {
    this.keyboard = new THREEx.KeyboardState();

    this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
    this.camera.position.z = 1000;

    this.scene = new THREE.Scene();

    this.player = new Asteroidio.Ship('W','A','S','D');
    this.enemy = new Asteroidio.Ship('I','J','K','L');
    this.scene.add( this.player.mesh );
    this.scene.add( this.enemy.mesh );

    this.renderer = new THREE.CanvasRenderer();
    this.renderer.setSize( window.innerWidth, window.innerHeight );

    document.body.appendChild( this.renderer.domElement );
    this.socket = new Asteroidio.Socket(this.enemy);
};

Asteroidio.Game.prototype.act = function() {
    this.player.takeCommands(this.keyboard);
    this.player.act();
    this.enemy.takeCommands(this.keyboard);
    this.enemy.act();
}

Asteroidio.Game.prototype.replicateState = function() {
    this.socket.replicate(game.getState());
}

Asteroidio.Game.prototype.render = function() {
    this.renderer.render( this.scene, this.camera );
}

Asteroidio.Game.prototype.getState = function() {
    return { position: this.player.mesh.position,
             rotation: this.player.mesh.rotation };
}