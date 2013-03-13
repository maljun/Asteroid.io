

connect to server

if enemy connect
-	add enemy

if enemy disconnect
-	remove enemy

loop
-	loop enemies
-	-	replay enemy action

-	me act

loop ≈30 fps
-	send my current position and actions

animationFrame 60 fps
-	scene render

disconnect