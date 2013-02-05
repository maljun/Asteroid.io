var game;

init();
animate();

function init() {
    game = new Asteroidio.Game();
}

function animate() {
    requestAnimationFrame( animate );
    game.act();
    game.render();
}
