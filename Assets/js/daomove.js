#pragma strict

public var moveSpeed = 0;
public var turnSpeed = 0;

function TimeUp()
{
	enabled = false;
}

function Start () {

}

function Update () {
	if(Input.GetKey(KeyCode.LeftArrow)== true)
	{
		transform.Translate(Vector3.left * moveSpeed * Time.deltaTime);
	}
	
	if(Input.GetKey(KeyCode.RightArrow)== true)
	{
		transform.Translate(-Vector3.left * moveSpeed * Time.deltaTime);
	}
	
	if(Input.GetKey(KeyCode.UpArrow)== true)
	{
		transform.Translate(Vector3.forward * moveSpeed * Time.deltaTime);
	}
	
	if(Input.GetKey(KeyCode.DownArrow)== true)
	{
		transform.Translate(-Vector3.forward * moveSpeed * Time.deltaTime);
	}
	
	if(Input.GetKey(KeyCode.A)== true)
	{
		transform.Rotate(-Vector3.up * turnSpeed);
	}
	if(Input.GetKey(KeyCode.D)== true)
	{
		transform.Rotate(Vector3.up * turnSpeed);
	}


}