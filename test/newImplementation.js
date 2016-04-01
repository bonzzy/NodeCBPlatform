/**
 * Created by tomislavfabeta on 02/04/16.
 */

var Implementation = require("../classes/create/implementation");
var options = {
    name: "likeCount"
};
new Implementation("like", options, function(err){
    console.log("done", err);
});