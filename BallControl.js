#pragma strict

var rotationSpeed = 100;
var jump = 8;

private var isFalling = false;

function Update ()
{
	var rotation : float = Input.GetAxis ("Horizontal") * rotationSpeed;
	rotation *= Time.deltaTime;
	rigidbody.AddRelativeTorque (Vector3.back * rotation);
	
	if((Input.GetKeyDown(KeyCode.W) || Input.GetKeyDown("up")) && isFalling == false)
	{
		rigidbody.velocity.y = jump;
	}
	isFalling = true;
}

function OnCollisionStay ()
{
	isFalling = false;
}
