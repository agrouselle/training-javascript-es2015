function TagComponent(target, url){
    this.target = target;
    this.url = url;
}

TagComponent.prototype.getRequest = function(url, callback){
    return callback({tags: ["songs", "lyrics", "bands"]});
}

TagComponent.prototype.displayTags = function(target, ...tags){
    console.log("Target:", target);
    console.log("Tags:", tags);
}

TagComponent.prototype.render = function(){
    this.getRequest(this.url, (data) => {
        let tags = data.tags;
        this.displayTags(this.target, ...tags);
    });
}


console.log("\n# Arrow Functions");
let tagComponent = new TagComponent("#tags-container", "/tags");
tagComponent.render();

