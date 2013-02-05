var game, socket;

init();
animate();

function init() {
    game = new Asteroidio.Game();
    socket = new Asteroidio.Socket();
}

function animate() {
    requestAnimationFrame( animate );
    game.act();
    game.render();
}
