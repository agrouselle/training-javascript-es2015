class Widget {
    constructor(){
        this.baseCSS = ".widget";
    }

    render(){
        throw new Error("Not implemented function");
    }
}

class NewsletterWidget extends Widget {

    constructor(name, description){
        super();
        this.name = name;
        this.description = description;
    }

    render() {
        console.log("Rendering a NewsletterWidget, written using the new class syntax");
    }
}

console.log("\n# Classes");
let newletterWidget = new NewsletterWidget("Great Newsletter", "Subscribe now!");
newletterWidget.render();