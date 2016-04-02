/**
 * Created by tomislavfabeta on 02/04/16.
 */

module.exports = Base;

function Base(){
    // this.name = name + ".js";
    this.template = Config.templates.defaultImplementation;
    this.templateName = name;
    this.name = Config.implementation.base;
    this.options = {
        base: Config.path.implementation,
        path: Config.path.implementation + "/" + this.templateName,
        templatePath: Config.path.templates
    };

    if (options){
        this.options.add = options;
    }

    this.fns = [];
    this.done = done;

    this.runner = function(){
        this.fns = [
            this._init,
            this._getTemplate,
            this._create
        ];

        new Runner(this.fns, this, this.done);
    };

    this.create = function(){
        this.runner();
    };

    this._init = function(done){
        done();
    };

    this._getTemplate = function(done){
        var self = this;

        this.File = new File(this.options.templatePath, this.template).read(function(err, data){
            self.data = data;
            console.log("data", data);
            done(err);
        })
    };

    this._create = function(){
        this.File = new File(this.options.base, null).createDir(this.options.base + "/" + this.templateName);
        this.File = new File(this.options.path, this.name).write(this.data, done);

        if (this.options.hasOwnProperty('add')){
            if (this.options.add.hasOwnProperty('name')){
                this.File = new File(this.options.path, this.options.add.name + ".js").write(this.data, done);
            }
        }
    };

    this.create();   
}