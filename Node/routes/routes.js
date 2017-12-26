var express = require('express');
var router = express.Router();
var controller = require('../controller/controller');


router.route('/t3/createUser')
    .post(controller.createUser);

router.route('/t3/getAllUsers')
      .get(controller.getAllUsers);

router.route('/t3/getUser/:email')
    .get(controller.getUser);

router.route('/t3/insertMovie')
    .post(controller.insertMovie);

router.route('/t3/insertTvseries')
    .post(controller.insertTvseries);

 router.route('/t3/getAllMovies')
    .get(controller.getAllMovies);

router.route('/t3/getAllTvseries')
    .get(controller.getAllTvseries);

router.route('/t3/deleteMovie/:name')
    .delete(controller.deleteMovies);

router.route('/t3/deleteTv/:name')
    .delete(controller.deleteTv);

router.route('/t3/deleteEpisode/:name')   
    .delete(controller.deleteEpisode); 

router.route('/t3/upload').post(controller.uploadImage);

module.exports = router;