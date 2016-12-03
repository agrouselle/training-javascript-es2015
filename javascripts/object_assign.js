function countdownTimer(target, timeLeft, options={}){
    let defaults = {
        timeUnit: "seconds",
        timeoutClass: ".timeout"
    };

    let settings = Object.assign({}, defaults, options);

    console.log(settings);
}

console.log("\n# Object Assign")
countdownTimer(".container", 100, {timeUnit:"minutes", hasStarted:false});