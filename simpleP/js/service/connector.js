// Filename: connector.js
define([
    'jquery',
    'socketio'
], function($, io){

    var conf = require('config/serverConfig');
    console.log(conf);

    socket = io.connect('http://localhost:8888');
    socket.on('wellcome', function (data) {
        console.log(data);
    });
});
