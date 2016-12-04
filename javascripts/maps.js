class TrainingMaps {
    map(){
        let rocker1 = {name: "James Hetfield"};
        let rocker2 = {name: "Lars Ulrich"};

        let totalGuitars = new Map();
        totalGuitars.set(rocker1, 24);
        totalGuitars.set(rocker2, 32);

        console.log(totalGuitars.get(rocker1));
        console.log(totalGuitars.get(rocker2));

        for(let [key, value] of totalGuitars){
            console.log(`${key.name} has ${value} guitars`);
        }

        totalGuitars.has(rocker1);
        totalGuitars.delete(rocker1);
    }

    weakMap(){
        let rocker1 = {name: "James Hetfield"};
        let rocker2 = {name: "Lars Ulrich"};

        let totalFans = new WeakMap();
        totalFans.set(rocker1, 2000000);
        totalFans.set(rocker2, 1000000);

        // Throws an error : can't assign primitive data types to WeakMap
        // totalFans.set("others", 9000000);

        // Throws an error : WeakMap is not iterable
        // for(let [key, value] of totalFans){
        //     console.log(`${key.name} has ${value} fans`);
        // }

        // WeakMaps are more efficient memory-wise
    }
}


console.log("\n# Maps and WeakMaps");

let trainingMaps = new TrainingMaps();
trainingMaps.map();
trainingMaps.weakMap();