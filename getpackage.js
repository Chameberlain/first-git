//getpackage.js
var somePackage = require('./somepackage');
somePackage.hello();

function log() {
    process.stdout.write(
        util.format.apply(util, arguments) + '\n');
}
