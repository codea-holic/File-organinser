let fs = require("fs");
let path = require("path");
let inputArr = process.argv.slice(2);
// input always starts from 2nd word. for ex:- node main.js Hello how are you.
// Output will be [ 'Hello', 'how', 'are', 'you.' ]

/* Command to implements
* node main.js tree "directoryPath"
* node main.js organise "directoryPath"
* node main.js help
*/
let command = inputArr[0];

switch(command) {
    case "tree":
        treeFn(inputArr[1]);
        break;
    case "organize": 
        organizeFn(inputArr[1]);
        break;

    case "help":
        helpFn();
        break;

    default:
        console.log("Please input right command");
        break;
}

function treeFn(dirPath){
    console.log("Tree command implement for ", dirPath);
}

function organizeFn(dirPath){
    // console.log("Organize command implement for ", dirPath);
    
    // check if path was not provided by the user
    if(dirPath == undefined){
        console.log(`path not provided error...
                also provide the path
        `);
        return;
    } else{
        let doesExist = fs.existsSync(dirPath);
        // check if the path provided by the user is available or not
        if(doesExist){

            // create path 
            let destPath = path.join(dirPath, "organisedFiles");
            // if dir does not exist then create the directory
            if(fs.existsSync(destPath) == false){
                fs.mkdirSync(destPath);     // creation of folder at that path
            } 

        } else{
            console.log(`path not found error...
                    enter the valid path
            `);
            return;
        }
    }

}


function helpFn(dirPath){
    console.log(`
    List of All the commands:
            node main.js tree "directoryPath"
            node main.js organise "directoryPath"
            node main.js help
    `);
}
