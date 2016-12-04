function getPollResults(pollName){
    return new Promise(function(resolve, reject){   // Promise in "pending" state
        let url = `/results/${pollName}`;
        let request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.onload = function(){
            if(request.status >= 200 && request.status < 400){
                resolve(JSON.parse(request.response));  // Successful response, promise in "fulfilled" state
            } else {
                reject(new Error(request.status));  // Error, promise in "rejected" state
            }
        }
        request.onerror = function(){
            reject(new Error("Error fetching results"));
        }

        request.send();
    });
}

console.log("\n# Promises");

getPollResults("Sass vs Less")
    .then(function(results){
        console.log("Promise is resolved. Results:", results);
    })
    .catch(function(error){
        console.log(error);
    });
