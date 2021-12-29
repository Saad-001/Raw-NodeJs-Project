const fs = require("fs");
const path = require("path");

const lib = {}

lib.baseDir = path.join(__dirname, `/../.data/`);

// creating a new file and writing data to it

lib.create = (dir, file, data, callBack) => {
    fs.open(`${lib.baseDir + dir}/${file}.json`, "wx" ,(err1, fileDescription) => {
        if(!err1 && fileDescription){
            const stringData = JSON.stringify(data)
            fs.writeFile(fileDescription, stringData, (err2) => {
                if(!err2){
                    fs.close(fileDescription, (err3) => {
                        if(!err3) {
                            callBack(false)
                        }else{
                            callBack("Error closing the new file")
                        }
                    })
                }else{
                    callBack("Error can't write in the new file")
                }
            })
        }else{
            callBack("couldn't create a file, it seems like there is already a file exist")
        }
    })
}

// read data from created file

lib.read = (dir, file, callBack) => {
    fs.readFile(`${lib.baseDir + dir}/${file}.json`, (err, data) => {
        callBack(err, data)
    })
}

module.exports= lib;