/*
 Write a program that creates a string that represents an 8×8 grid, 
 using newline characters to separate lines. At each position of the 
 grid there is either a space or a “#” character. The characters should 
 form a chess board.
*/ 

var length = 20;
var row = "";
var i = 1;
var lastchar = "";
var lines = 0;
for (row; row.length < (length*length) + lines;) {
	if (lastchar != "#") {
		row +="#";
		lastchar = "#";
		if (i==length) {
			row += "\n";
			i=0;
			lastchar = "_";
			lines++;
		}
	}
	else if (lastchar != "_") {
		row +="_";
		lastchar = "_";
		if (i==length) {
			row += "\n";
			i=0;
			lastchar = "#";
			lines++;
		}
	}
	i++;
	}
console.log(row);