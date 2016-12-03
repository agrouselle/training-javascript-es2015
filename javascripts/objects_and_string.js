function buildUser(first, last, postCount){
    // let fullname = first + " " + last;   // old way!
    let fullname = `${first} ${last}`;
    const ACTIVE_POST_COUNT = 10;

    return {
        first,
        last,
        fullname,
        isActive(){
            return postCount >= ACTIVE_POST_COUNT;
        }
    };
}

console.log("\n# Object Initializer Shorthand and Template String");
console.log(buildUser("Steven", "Tyler"));


console.log("\n# Object Destructuring");
let {first, fullname} = buildUser("Axl", "Rose");
console.log(first, fullname);

console.log("\n# Method Initializer Shorthand");
console.log("Is the user active?", buildUser("Freddie", "Mercury", 12).isActive());

