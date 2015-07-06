'use strict';

/* App Module */
var photoAlbumApp = angular.module('photoAlbumApp', [
    'ngRoute',
    'cloudinary',
    'albumControllers',
    'albumServices'
]);

photoAlbumApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        otherwise({
            redirectTo: '/photos'
        });
    }
]);