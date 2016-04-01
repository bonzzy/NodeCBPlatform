/**
 * Created by tomislavfabeta on 02/04/16.
 */
var fs = require("fs"),
    path = require("path"),
    util = require("util");

var File = function(filepath, name, options){
    var private = {};
    this.path = filepath;
    this.name = name;
    this.options = {

    };

    this.createDir = function (dir_) {
        var dir = this.path;
        
        if (dir_){
            dir = dir_;
        }

        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
    };

    this.write = function(data, done){
        this.createDir();

        fs.writeFile(this.path + "/"+this.name, data, function(err) {
            if(err) {
                return console.log(err);
            }

            done(err);
        });
    };

    this.read = function (done) {
        var content;

        fs.readFile(this.path + "/" + this.name, 'utf8',function (err, data) {
            if (err) {
                console.log(err);
            }
            content = util.format(data);
            console.log(content);

            done(err, content);
        });
    };

    this.createDir(filepath);
};

module.exports = File;