/*The previous chapter introduced the standard function Math.min 
that returns its smallest argument. We can do that ourselves now. 
Write a function min that takes two arguments and returns their minimum.*/

function mini(x,y) {
	if (x<y) {
		return x;
	}
	else { 
		return y;
	}
}

console.log(mini(1,3));


