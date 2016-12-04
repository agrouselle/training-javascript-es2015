class TrainingArrays {
    destructuringArrays() {
        let users = ["Tyler", "Mercury", "Jagger"];

        let [a, b, c] = users;
        console.log("\n# Array Destructuring");
        console.log(a, b, c);

        let [e, , f] = users;
        console.log(e, f);

        let [first, ...rest] = users;
        console.log(first, rest);
    }

    loopingOverArrays(){
        let names = ["Steven", "Freddie", "Mick"];

        for(let index in names){
            console.log(names[index]);
        }

        for(let name of names){
            console.log(name);
        }
    }

    loopingOverObjectProperties(){
        let names = ["Axl", "Angus", "Brian"];
        console.log(typeof names[Symbol.iterator]); // Returns a function -> Iterable
        for(name of names){ }

        let user = {first:"Saul", last:"Hudson", instrument:"guitar"};
        console.log(typeof user[Symbol.iterator]);  // Returns undefined -> Not iterable
    }

    findElementInArray(){
        let users = [
            {login:"Axl", admin:false},
            {login:"Mick", admin:true},
            {login:"Steven", admin:false}
        ];

        let admin = users.find( (user) => {
                return user.admin;
        })

        console.log("First admin found is", admin);
    }
}

let trainingArrays = new TrainingArrays();

console.log("\n# Destructuring Arrays");
trainingArrays.destructuringArrays();

console.log("\n# Looping over Arrays");
trainingArrays.loopingOverArrays();

console.log("\n# Looping Over Object Properties");
trainingArrays.loopingOverObjectProperties();

console.log("\n# Find element in an array");
trainingArrays.findElementInArray();