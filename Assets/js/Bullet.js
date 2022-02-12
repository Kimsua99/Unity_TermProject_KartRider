#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter(collisionInfo : Collision)
{
	if(collisionInfo.gameObject.tag == "Delete")
	{
		collisionInfo.gameObject.SendMessage("YouAreHit");
	}
	Destroy(gameObject);
}