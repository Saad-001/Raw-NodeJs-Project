const notFoundHandler = {};

notFoundHandler.handleNotFound = (requestProperties, callBack) => {
    console.log(requestProperties);
    callBack(404, {
        message : "your requested URl is not found"
    })
}

module.exports = notFoundHandler;