function sets(){
    let tags = new Set();

    tags.add("Hard Rock");
    tags.add({year: 1990})
    tags.add("Blues");
    tags.add("Metal");

    for(let tag of tags){
        console.log(tag);
    }

    let [a, b, c, d] = tags;
    console.log(a, b, c, d);
}

console.log("\n# Sets");
sets();

function weakSet(){
    let tags = new WeakSet();

    let year1990 = {year: 1990};
    let year1992 = {year: 1992};
    let year1979 = {year: 1979};

    tags.add(year1990);
    tags.add(year1992);
    tags.add(year1979);

    // WeakSet is not iterable
    // for(let tag of tags){
    //     console.log(tag);
    // }

    console.log(tags);

    console.log(tags.has(year1990));
    console.log(tags.delete(year1990));
    console.log(tags.has(year1990));
    // And has no method to read from it
}

console.log("\n# WeakSets");
weakSet();