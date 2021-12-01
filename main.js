let fs = require("fs");
let path = require("path");
let inputArr = process.argv.slice(2);
let types = {
    media: ["mp4", "mkv", "png", "m4a", "jpg" ],
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'odt', 'ods', 'odf', 'txt','ps'],
    app: ['exe', 'dng', 'pkg', 'deb', 'ipynb', 'Ink']
}

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
    let destPath;
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
            destPath = path.join(dirPath, "organisedFiles");
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
    organizeHelper(dirPath, destPath);
}

// used to organize all the files into a seperate folders.
function organizeHelper(src, dest){
    // below function is used to read all the file names from the Directory.
    let childNames = fs.readdirSync(src);
    // console.log(childNames);   
    for(let i = 0; i < childNames.length; i++){
        let childAddress = path.join(src, childNames[i]);
        // check if it is file or directory, if found dir then do nothing
        let isFile = fs.lstatSync(childAddress).isFile();
        if(isFile){
           
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

