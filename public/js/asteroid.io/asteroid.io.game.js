var Asteroidio = Asteroidio || {};

Asteroidio.Game = function() {
    this.keyboard = new THREEx.KeyboardState();

    this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
    this.camera.position.z = 1000;

    this.scene = new THREE.Scene();

    this.ship1 = new Asteroidio.Ship('W','A','S','D');
    this.ship2 = new Asteroidio.Ship('I','J','K','L');
    this.scene.add( this.ship1.mesh );
    this.scene.add( this.ship2.mesh );

    this.renderer = new THREE.CanvasRenderer();
    this.renderer.setSize( window.innerWidth, window.innerHeight );

    document.body.appendChild( this.renderer.domElement );
};

Asteroidio.Game.prototype.act = function() {
    this.ship1.takeCommands(this.keyboard);
    this.ship1.act();
    this.ship2.takeCommands(this.keyboard);
    this.ship2.act();
}

Asteroidio.Game.prototype.render = function() {
    this.renderer.render( this.scene, this.camera );
}

Asteroidio.Game.prototype.getState = function() {
    return "42";
}