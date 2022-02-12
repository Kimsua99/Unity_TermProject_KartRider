#pragma strict
var explosionPrefab : GameObject;

function Start () {

}

function Update () {

}
function YouAreHit()
{
	Instantiate(explosionPrefab, transform.position, transform.rotation);
	Destroy(gameObject);
}