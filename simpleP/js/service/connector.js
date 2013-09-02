// Filename: connector.js
define([
    'jquery',
    'socketio'
], function($, io){

    var socket = io.connect('http://127.0.0.1:8880');

    return socket;
});
