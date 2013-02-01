var camera, scene, renderer;
var ship, keyboard;

init();
animate();

function init() {
    keyboard = new THREEx.KeyboardState();
    speed = 0;

    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 1000;

    scene = new THREE.Scene();

    ship1 = new Ship('W','A','S','D');
    ship2 = new Ship('I','J','K','L');
    scene.add( ship1.mesh );
    scene.add( ship2.mesh );

    renderer = new THREE.CanvasRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );

    document.body.appendChild( renderer.domElement );
}

function animate() {
    requestAnimationFrame( animate );

    ship1.takeCommands(keyboard);
    ship1.act();
    ship2.takeCommands(keyboard);
    ship2.act();
    
    renderer.render( scene, camera );
}
