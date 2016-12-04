class Iterators {
    simulateForOfLoop(){
        let names = ["Axl", "Slash", "Steven"];
        let iterator = names[Symbol.iterator]();

        let firstRun = iterator.next();
        console.log(`Name: ${firstRun.value}. Done: ${firstRun.done}`);

        let secondRun = iterator.next();
        console.log(`Name: ${secondRun.value}. Done: ${secondRun.done}`);

        let thirdRun = iterator.next();
        console.log(`Name: ${thirdRun.value}. Done: ${thirdRun.done}`);

        let fourthRun = iterator.next();
        console.log(`Name: ${fourthRun.value}. Done: ${fourthRun.done}`);
    }

    defineObjectIterator(){
        let post = {
            title: "New feature in JS",
            replies: 19
        }

        post[Symbol.iterator] = function(){
            let properties = Object.keys(this);
            let count = 0;
            let isDone = false;

            let next = () => {
                if(count >= properties.length) {
                    isDone = true;
                }

                return {done: isDone, value: this[properties[count++]]};
            }

            return {next};
        }

        for(let p of post){
            console.log(p);
        }
    }

    defineIteratorUsingGenerator(){
        function *names(){
            yield "Axl";
            yield "Slash";
            yield "Steven";
        }

        for(let name of names()){
            console.log(name);
        }
    }

    defineIteratorUsingGenerator2(){
        let post = {
            title: "New feature in JS",
            replies: 19
        }

        post[Symbol.iterator] = function *(){
            let properties = Object.keys(this);
            for(let p of properties){
                yield this[p];
            }
        }

        for(let p of post){
            console.log(p);
        }
    }
}

setTimeout(function(){
    console.log("\n# Iterators");

    let iterators = new Iterators();
    iterators.simulateForOfLoop();

    iterators.defineObjectIterator();

    iterators.defineIteratorUsingGenerator();
    iterators.defineIteratorUsingGenerator2();
}, 500);
