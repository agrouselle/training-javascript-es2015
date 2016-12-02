// Variadic functions and Rest Parameters

function displayTags(...tags){
    // console.log(arguments);  // The old way
    console.log(tags);

}

console.log("\n# Variadic Functions, Rest Parameters, Spread Operator");
displayTags("songs");
displayTags("songs", "lyrics");
displayTags("songs", "lyrics", "bands");

var args = ["songs", "lyrics", "bands"];
displayTags(...args);

