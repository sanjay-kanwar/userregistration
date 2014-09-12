/**
 * Created by sanjaykanwar on 11/09/2014.
 */
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    username:{
        type:String    }
});

module.exports = mongoose.model('User', UserSchema);
