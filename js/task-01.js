const list = document.querySelector("#categories")
console.log("Number of categories :", list.children.length);
console.log("");

const itemEl = categories.querySelectorAll(".item");

 itemEl.forEach(element => {
    console.log(`Category : ${element.querySelector("h2").textContent}`);
    console.log(`Elements : ${element.querySelectorAll("li").length}`);
    console.log("");
}); 
