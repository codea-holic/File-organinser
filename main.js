let inputArr = process.argv.slice(2);
// input always starts from 2nd word. for ex:- node main.js Hello how are you.
// Output will be [ 'Hello', 'how', 'are', 'you.' ]

/* Command to implements
* node main.js tree "directoryPath"
* node main.js organise "directoryPath"
* node main.js tree
*/
let command = inputArr[0];

switch(command) {
    case "tree":
        break;
    case "organize": 
        break;

    case "help":
        break;

    default:
        console.log("Please input right command");
        break;
}

function treeFn(dirPath){
    console.log("Tree command implement for ", dirPath);
}

function organizeFn(dirPath){
    console.log("Tree command implement for ", dirPath);
}

function helpFn(dirPath){
    console.log("Tree command implement for ", dirPath);
}

