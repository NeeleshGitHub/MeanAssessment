var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var signupSchema = new Schema({
    email: { type: String, unique: true, required: true },
    name: { type: String },
    password: { type: String },
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date },
    role: { type: String}
    
});

var movieData = new Schema({
    
    movId: { type: Number, unique: true },
    movName: { type: String },
    genres : { type: String },
    movImg: { type: String }, 
    desc: { type: String},
    created_at: { type: Date, default: Date.now() }

   
});

var tvData = new Schema({
 
    tvId: { type:Number, unique: true},
    tvName: { type:String },
    genres : { type: String },
    tvImg: { type: String },
    desc: { type: String},
    created_at: {type: Date, default: Date.now() }

});



var Signup = mongoose.model('signupData', signupSchema);
var Movie = mongoose.model('movieData', movieData);
var Tvseries = mongoose.model('tvData', tvData);

module.exports = {
    Signup:Signup,
    Movies:Movie,
    Tvseries:Tvseries

}