"use strict";
exports.__esModule = true;
var fs = require("fs");
var os = require("os");
var RequireFsDemo = (function () {
    function RequireFsDemo() {
    }
    RequireFsDemo.prototype.appenFile = function () {
        fs.appendFile('test.txt', ' bhasker yadav.');
    };
    RequireFsDemo.prototype.printCurrentUser = function () {
        var usr = os.userInfo();
        console.log(usr);
        console.log("Hello " + usr.username);
    };
    return RequireFsDemo;
}());
exports.RequireFsDemo = RequireFsDemo;
var rf = new RequireFsDemo();
rf.appenFile();
rf.printCurrentUser();
