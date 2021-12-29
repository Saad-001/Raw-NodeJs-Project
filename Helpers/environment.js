const environment = {};

environment.staging= {
    port : 3000,
    envName : "staging"

}

environment.production = {
    port : 5000, 
    envName : "production"
}

const currentEnvironment = typeof process.env.ENV_NAME === "string" ? process.env.ENV_NAME : "staging";

const checkedEnvironment = typeof environment[currentEnvironment] === "object" ? environment[currentEnvironment] : environment.staging;
console.log(checkedEnvironment);
module.exports = checkedEnvironment;