/*
Write a loop that makes seven calls to console.log to output the following 
triangle:
#
##
###
####
#####
######
#######
*/

var hashtag = "#";
var result = ""
for (var counter = 0; counter < 7;counter++)
  {
    result = result + hashtag
    console.log(result);
  }