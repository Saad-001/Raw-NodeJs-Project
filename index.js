const http = require("http");
const {handleReqRes} = require("./Helpers/ReqResHandler");
const environment = require("./Helpers/environment");
const data = require("./lib/data");

const app = {};

app.handleReqRes = handleReqRes

// data.create("test", "newFile", {"name" : "Saad", "country" : "Bangladesh", "language" : "Bangla"}, (err) => {
//     console.log(`error is`, err)
// })

data.read("test", "newFile", (err, data) => {
    console.log(`error is ${err} and data is ${data}`)
})

app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        console.log(`listening to port ${environment.port}`)
    })
}

app.createServer();