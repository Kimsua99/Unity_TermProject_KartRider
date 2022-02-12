#pragma strict
private var cartCount : int;
private var counter : int;
private var cleared : boolean;
var labelStyle : GUIStyle;

function Start () {
   cleared = false;
   cartCount = GameObject.FindGameObjectsWithTag("Cart").length;
   Debug.Log("Start!");
}

function Update () {

}

function OnTriggerEnter(other:Collider)
{
   if(other.gameObject.tag == "Cart")
   {
      counter ++;
      
      if(cleared == false && counter == cartCount)
      {
         cleared = true;
         yield WaitForSeconds(2.0);
         Application.LoadLevel("Title");
      }
   }
}

function OnTriggerExit(other:Collider)
{
   if(other.gameObject.tag == "Cart")
      counter --;
}
function OnGUI()
{
	if(cleared == true)
	{
		var sw : int = Screen.width;
		var sh : int = Screen.height;
		GUI.Label(Rect(0,0,sw, sh),"-Finish-", labelStyle);	
	}
}