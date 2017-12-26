var mongoose = require('mongoose');
var Signup = mongoose.model('signupData');
var Movie = mongoose.model('movieData');
var Tv = mongoose.model('tvData');
var Episode = mongoose.model('episodeData');
var jwt  = require("jsonwebtoken");
var multer = require('multer');
// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'nmish28@gmail.com',
//         pass: 'Nmish2802'
//     }
// });



exports.uploadImage = (req, res) => {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            // console.log(file);
            cb(null, 'src/assets/images');
        },
        filename: function (req, file, cb) {
            console.log(file.originalname);
            cb(null, 'KuchBhi.jpg');
        }
    });
    // console.log(storage);
    var upload = multer({ storage: storage }).any('profileImage');
    upload(req, res, error=> {
        console.log(req);
        if(error) {
             return res.json(error);
        } 
        res.json({
            message: ' Image Uploaded !!',
            // path: req.params.email + '.jpg'
        })
    }) ;
}

exports.verifyLogin = function (req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers.authorization;
    if (token) { // verifies secret and checks exp 
        jwt.verify(req.headers.authorization.split(' ')[1], 'secret',
            function (err, decoded) {
                if (err) { //failed verification.
                    return res.json({ "error": true });
                }
                req.decoded = decoded;
                next(); // no error, proceed 
            });
    } else { // forbidden without token 
        return res.status(403).send({ "error": "unauthorized user" });
    }
}

exports.createUser = (req, res) => {
    var signup = new Signup({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
        role: req.body.role,
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
        let token = jwt.sign({email: response.email, password: response.password, role: response.role} ,'secret');        
        res.json({response: response,password: response.password, token :token});
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
     //   let token = jwt.sign({response: response} ,'secret');        
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

exports.deleteEpisode = (req, res) => {
    Episode.remove({ name: req.body.name }, (error, response) => {
        if (error){
            return res.json(req, res, error);
        }
        res.json(response);
    });

}


