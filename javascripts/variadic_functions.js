class TrainingVariadicFunction {
    // Variadic functions and Rest Parameters
    displayTags(...tags){
        // console.log(arguments);  // The old way
        console.log(tags);
    }
}


console.log("\n# Variadic Functions, Rest Parameters, Spread Operator");

let trainingVariadicFunction = new TrainingVariadicFunction();
trainingVariadicFunction.displayTags("songs");
trainingVariadicFunction.displayTags("songs", "lyrics");
trainingVariadicFunction.displayTags("songs", "lyrics", "bands");

var args = ["songs", "lyrics", "bands"];
trainingVariadicFunction.displayTags(...args);

