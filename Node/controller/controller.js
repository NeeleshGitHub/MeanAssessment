var mongoose = require('mongoose');
var Signup = mongoose.model('signupData');
var Movie = mongoose.model('movieData');
var Tv = mongoose.model('tvData');


exports.createUser = (req, res) => {
    var signup = new Signup({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
        totalCost: 0,
        created_at: new Date(),
        updated_at: ""
    });
    signup.save((error, response) => {
        if (error) {
             res.json(error);
        }
        else {
            res.json({
                success: true,
                body: response
            });
        }
    });
} 




exports.getAllUsers = (req, res) => {
    Signup.find({}, function (error, response) {
        if (error) {
            return res.json(req, res, error);
        }
        res.json(response);
    });
}


exports.getUser = (req, res) => {
    var email = req.params.email;
    Signup.findOne({ email: email }, function (error, response) {
        if (error) {
            return res.json(error)
        }
        res.json(response);
    });
}

exports.insertMovie = (req,res) => {
    var movies = new Movie ({
        movName : req.body.movName,
        movId : req.body.movId,
        movImg : req.body.movImg,
        genres: req.body.genres,
        desc : req.body.desc ,
        created_at: new Date()
    });

    movies.save((error, response) => {
        if (error) {
           return res.json({
                success: false,
                body: error
            });
        }
        return res.json({
            success: true,
            body: response
        });
    });
}

exports.insertTvseries = (req,res) => {
    var tv_series = new Tv ({
        tvName: req.body.tvName,
        tvId : req.body.tvId,
        tvImg: req.body.tvImg,
        genres: req.body.genres,
        desc: req.body.desc,
        created_at: new Date()

    });

    tv_series.save((error, response) => {
        if (error) {
           return res.json({
                success: false,
                body: error
            });
        }
        return res.json({
            success: true,
            body: response
        });
    });
}
exports.getAllMovies = (req, res) => {
    Movie.find({}, (error, response) => {
        if (error) {
            return res.json(req, res, error);
        }
        res.json(response);
    });
}

exports.getAllTvseries = (req, res) => {
    Tv.find({}, (error, response) => {
        if (error) {
            return res.json(req, res, error);
        }
        res.json(response);
    });
}

exports.deleteMovies = (req,res) => {
    Movie.remove({movName: req.params.name},(error, response) => {
        if (error) {
            console.log(error);
            return res.json(req, res, error);
        }
        
        res.json(response);
    });
}

exports.deleteTv = (req, res) => {
    Tv.remove({ tvName: req.params.name }, (error, response) => {
        if (error) {
            return res.json(req, res, error);
        }
        res.json(response);
    });
}


