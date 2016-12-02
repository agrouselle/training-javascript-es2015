// let and const

function loadProfiles(usernames){
    const MAX_USERS = 3;

    // console.log(loadingMessage);

    if(usernames.lenght > MAX_USERS) {
        let loadingMessage = "This might take a while...";
        // do something

        console.log(loadingMessage);
    } else {
        let flashMessage = "Loading...";
        // do something

        console.log(flashMessage);
    }
}

console.log("# Let and Const");
loadProfiles(['user1', 'user2', 'user3']);