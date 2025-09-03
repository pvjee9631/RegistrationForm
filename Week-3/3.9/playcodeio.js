let ner = prompt("Tanii ner hen be");
// username gdg utgaar bold iig localStorage-d hadgalsan
localStorage.setItem("username",ner);

const logName =localStorage.getItem("username");

console.log("Tawtai moril, " +logName + " !" )

