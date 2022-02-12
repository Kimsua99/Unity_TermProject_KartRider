using UnityEngine;
using System.Collections;

public class trainmove : MonoBehaviour {
	int a = 1;
	void Update(){

		if (transform.position.z <-1000.0f) 
		{
			a=3500;
		}
		else if(transform.position.z > 20000.0f) 
		{
			a=-3500;
		}


		transform.Translate (Vector3.forward * 1.0f * Time.deltaTime * a);
	}
}