function destructuringArrays() {
    let users = ["Tyler", "Mercury", "Jagger"];

    let [a, b, c] = users;
    console.log("\n# Array Destructuring");
    console.log(a, b, c);

    let [e, , f] = users;
    console.log(e, f);

    let [first, ...rest] = users;
    console.log(first, rest);
}

console.log("\n# Destructuring Arrays");
destructuringArrays();

function loopingOverArrays(){
    let names = ["Steven", "Freddie", "Mick"];

    for(let index in names){
        console.log(names[index]);
    }

    for(let name of names){
        console.log(name);
    }
}

console.log("\n# Looping over Arrays");
loopingOverArrays();


function loopingOverObjectProperties(){
    let names = ["Axl", "Angus", "Brian"];
    console.log(typeof names[Symbol.iterator]); // Returns a function -> Iterable
    for(name of names){ }

    let user = {first:"Saul", last:"Hudson", instrument:"guitar"};
    console.log(typeof user[Symbol.iterator]);  // Returns undefined -> Not iterable
}

console.log("\n# Looping Over Object Properties");
loopingOverObjectProperties();


function findElementInArray(){
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

findElementInArray();