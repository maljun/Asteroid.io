function Ship (up, left, down, right) {
	this.up = up;
	this.left = left;
	this.down = down;
	this.right = right;
	this.speed = 0;
	this.geometry = new THREE.CubeGeometry( 200, 200, 200 );
    this.material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
    this.mesh = new THREE.Mesh( this.geometry, this.material );
    this.mesh.position.x = -200 + Math.random() * 400;
    this.mesh.position.y = -200 + Math.random() * 400;
}

Ship.prototype.changeHeading = function(delta) {
	this.mesh.rotation.z += delta;
}

Ship.prototype.takeCommands = function(keyboard) {
	 if(keyboard.pressed(this.left)){
      this.changeHeading(0.1);  
    }

    if(keyboard.pressed(this.right)) {
      this.changeHeading(-0.1);  
    }

    if(keyboard.pressed(this.up)){
      this.speed = 10;
    }

    if(keyboard.pressed(this.down)) {
      this.speed = -10;
    }
}

Ship.prototype.act = function() {
	if(this.speed>0) {
      this.speed -= 0.1;  
    }

    if(this.speed<0){
      this.speed += 0.1;
    }

    this.mesh.position.x += Math.sin(-this.mesh.rotation.z) * this.speed;
    this.mesh.position.y += Math.cos(-this.mesh.rotation.z) * this.speed;
}