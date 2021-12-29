const sampleHandler = {};

sampleHandler.handleSample = (requestProperties, callBack) => {
    console.log(requestProperties);
    callBack(200, {
        message : "congratulation your requested URL is ok"
    })
}

module.exports = sampleHandler;