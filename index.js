const core = require('@actions/core');
const exec = require('child_process').exec;

async function run() {
    //const path = "test/test.properties";
    const path = core.getInput('path');
    console.log(`path:${path}`);

    //const property = "version";
    const property = core.getInput('property');
    console.log(`property:${property}`);

    //const value = "1.0.1";
    const value = core.getInput('value');
    console.log(`value:${value}`);

    exec(`grep -r "^[#]*\s*${property}=.*" "${path}"`, (grepError) => {
        if(grepError != null) {
            console.log("Property doesnt exist, trying to insert");
            //append to end of file.
            exec(`cat >> "${path}" <<EOF 
            \n${property}=${value}`, (error, stderr) => {
                if(error != null) {
                    core.setFailed(error);
                }
                if(stderr != null) {
                    console.log(stderr);
                }
            });
        } else {
            exec(`sed -ir "s/^[#]*\s*${property}=.*/${property}=${value}/" "${path}"`, (error, stderr) => {
                if(error != null) {
                    core.setFailed(error);
                }
                if(stderr != null) {
                    console.log(stderr);
                }
            });
        }
    });
}

run();