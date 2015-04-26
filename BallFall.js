#pragma strict

var maxFall = -5;

function Update ()
{
	if(transform.position.y <= maxFall)
	{
		Application.LoadLevel("MainMenu");
	}
}
