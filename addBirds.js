var birdsSpotted = [4,5,8,1,0,8,11];
var birdTotal = 0;


for (var i = 0; i < birdsSpotted.length; i++) {
    birdTotal = birdTotal + birdsSpotted[i];
    // console.log("Total bird's seen so far: " + birdTotal);
}

console.log("The total number of birds seen this week is: " + birdTotal + " birds!");