var Asteroidio	= Asteroidio 		|| {};

Asteroidio.Ship = function(up, left, down, right) {
	this.up = up;
	this.left = left;
	this.down = down;
	this.right = right;
	this.speed = 0;
  this.mesh = this.createModel();
  this.setPosition( -200 + Math.random() * 400, -200 + Math.random() * 400);
}

Asteroidio.Ship.prototype.createModel = function() {
	var geometry = new THREE.CubeGeometry( 200, 200, 200 );
	var color = Math.random() * 16777215;
  var material = new THREE.MeshBasicMaterial( { color: color, wireframe: false } );
  return new THREE.Mesh( geometry, material );
}

Asteroidio.Ship.prototype.changeHeading = function(deltaZ) {
	this.mesh.rotation.z += deltaZ;
}

Asteroidio.Ship.prototype.setPosition = function(x, y) {
	this.mesh.position.x = x;
  this.mesh.position.y = y;
}

Asteroidio.Ship.prototype.takeCommands = function(keyboard) {
	 if(keyboard.pressed(this.left)){
      this.changeHeading(0.1);  
    }

    if(keyboard.pressed(this.right)) {
      this.changeHeading(-0.1);  
    }

    if(keyboard.pressed(this.up)){
      this.speed = 20;
    }

    if(keyboard.pressed(this.down)) {
      this.speed = -20;
    }
}

Asteroidio.Ship.prototype.act = function() {
	if(this.speed>0) {
      this.speed -= 0.1;  
    }

    if(this.speed<0){
      this.speed += 0.1;
    }

    this.mesh.position.x += Math.sin(-this.mesh.rotation.z) * this.speed;
    this.mesh.position.y += Math.cos(-this.mesh.rotation.z) * this.speed;
}