const url = require("url");
const {StringDecoder} = require("string_decoder");
const routes = require("../routes");
const {handleNotFound} = require("../ResponseHandler/notFoundHandler")

const ReqResHandler = {};

ReqResHandler.handleReqRes = (req, res) => {
    const parsedUrl = url.parse(req.url, "true")
    const query = parsedUrl.query;
    const path = parsedUrl.pathname;

    const header = req.headers;
    console.log(header)

    const trimmedPath = path.replace(/^\/+|\/+$/g, "");
    console.log(trimmedPath);

    const method = req.method.toLowerCase();
    console.log(method)

    const decoder = new StringDecoder("utf-8")
    let data = "";

    const requestProperties = {
        trimmedPath,
        path,
        parsedUrl,
        method,
        query,
        header
    }

    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : handleNotFound;
    console.log(trimmedPath)

    chosenHandler(requestProperties, (statusCode, payload) => {
        statusCode = typeof(statusCode) === "number" ? statusCode : 500;
        payload = typeof(payload) === "object" ? payload : {};

        const payloadString = JSON.stringify(payload);
        res.writeHead(statusCode);
        res.end(payloadString);
    }) 
    
    // req.on("data", (buffer) => {
    //     data += decoder.write(buffer)
    // })

    // req.on("end", () => {
    //     data += decoder.end()
    //     console.log(data);
    //     res.end("hello programmers")
    // })
    
}

module.exports = ReqResHandler;