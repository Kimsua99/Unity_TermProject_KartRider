#pragma strict

@HideInInspector
var coin : int;
var coinParticlePrefab : GameObject;
var skin : GUISkin;

function CatchCoin(amount : int)
{
	Instantiate(coinParticlePrefab, transform.position, transform.rotation);
	coin += amount;
}
function OnGUI()
{
	GUI.skin = skin;
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	var coinText : String = "COIN " + coin.ToString();
	GUI.Label(Rect(0,0,sw/2,sh/4),coinText, "Coin");
	
}
function Start () {

}

function Update () {

}