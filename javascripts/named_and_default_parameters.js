// Named and default parameters

function setPageThread(name, {popular, expires, active}={}){

    console.log("name:", name)
    console.log("popular:", popular)
    console.log("expires:", expires)
    console.log("active:", active)
}

console.log("\n# Named and Default Parameters");
setPageThread("Hello World", {popular:true, expires:10000});