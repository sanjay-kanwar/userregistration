var User = require('../models/user');


exports.getUsers = function (req, res) {
    res.json({ message: 'Express' });
};

//Create a New User
exports.postUsers = function (req, res) {
    var user = new User({
        username: req.body.username
    });
    user.save(function (err) {
        if (err)
            res.send(err);
        res.json({message: "New"});
    });
};


// Get One User Based On User
exports.getUsers = function (req, res) {
    var name = req.params.username;
    User.find({ username: name }, function (err, user) {
        if (err)
            res.send(err);
        res.json({message: 'One User has been found', data: user});
    });
};

//Get All Users
exports.getAllUsers = function (req, res) {
    User.find(function (err, users) {
        if (err)
            res.send(err);
        res.json({message: 'List of All the users', data: users});
    });
};


//Delete a Particular User
exports.deleteUser = function (req, res) {
    var userId = req.params.user_id;
    User.findByIdAndRemove(userId, function (err) {
        if (err)
            res.send(err);
        res.json({message: 'Deleted User', data: userId});
    });
};
