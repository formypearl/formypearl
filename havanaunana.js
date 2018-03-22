/**
 * Created by kriz on 1/18/2017.
 */

// create the module and name it mykdrApp
// also include ngRoute for all our routing needs
var mykdrApp = angular.module('mykdrApp', ['ngRoute']);

// configure our routes
mykdrApp.config(function($routeProvider) {
    $routeProvider

        // route for the login page
        .when('/', {
            title : "Log In To Continue",
            description : "",
            templateUrl : 'pages/login.html',
            controller  : 'mainController'
        })

        // route for the theme page
        .when('/theme', {
            title : "For the Best Dream Girl In the World - You & Me",
            description : "",
            templateUrl : 'pages/theme.html',
            controller  : 'mainController'
        })

        // route for the bday page
        .when('/cutiepie', {
            title :"My Cutiepie - She took me back to my Best with Love na na na...  - You & Me",
            description : "",
            templateUrl : 'pages/cutiepie.html',
            controller  : 'mainController'
        })

        // route for the dreams page
        .when('/dream', {
            title :"My Wildest Dream - 'Show it to me that You Can...'  - You & Me",
            description : "",
            templateUrl : 'pages/dream.html',
            controller  : 'mainController'
        })


});

mykdrApp.run(['$rootScope', '$route', function($rootScope, $route) {

    // $rootScope.$on('$viewContentLoaded', function () {
    //     $templateCache.removeAll();
    // });

    $rootScope.$on('$routeChangeSuccess', function () {
        document.title = $route.current.title;
    });

    $rootScope.dataSelected = {};

    $rootScope.dataSelected.mainData = {

        general: {
            author: "krish",
            url: "http://www.formypearl.github.io",
            logo: "./images/mylogo.png",
            lastupdated: "22 March 2018",
            image: "./images/pearl.png",
            spiral: "./images/theme/spiral.jpg"
        },
        menu: {
            cutiepie: "MY CUTIEPIE",
            dream: "MY WILDEST DREAM",
            angel: "./images/theme/angel.jpg"
        },
        theme: {
            portrait: {
                pic1: "./images/theme/a.jpg",
                pic1alt: "Havana Unana"
            },
            landscape: {
                pic1: "./images/theme/i.jpg",
                pic1alt: "Havana Unana"
            }
        },
        covers: {
            cutiepie: "./images/covers/cutiepie.jpg",
            dream: "./images/covers/dream.jpg"
        },

        pagetop: {
            updated: "Last Updated : "
        },
        footer: {
            copyright: "Team BehindBrains © 2018. All Rights Reserved."
        }
    };


}
]);



// create the controller and inject Angular's $scope
mykdrApp.controller('mainController', function($rootScope, $scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';

    document.body.scrollTop = 0;


    // inject rootScope variables
    $rootScope.credentials = "havanaunanaandmybanana";
    $rootScope.valid = false;

    $rootScope.closed = function() {
        var z= document.getElementById("mymenuglyph");
        z.style.display="inline-block";
        var x= document.getElementById("mykdr_menu");
        x.style.display="none";
        var y= document.getElementById("closenav");
        y.style.display="none";
    };

    $rootScope.opened = function() {
        var z= document.getElementById("closenav");
        z.style.display="inline-block";
        var x= document.getElementById("mykdr_menu");
        x.style.display="block";
        var y= document.getElementById("mymenuglyph");
        y.style.display="none";
    };

    $rootScope.logId = function() {

        var c = $scope.user + $scope.pwd;

        if(c===$rootScope.credentials) {

            $rootScope.valid = true;
            // alert($rootScope.valid);

            var x= document.getElementById("redirect");
            x.style.display="block";
        }
        else {

            $rootScope.valid = false;
            // alert($rootScope.valid);

            var z= document.getElementById("login");
            z.style.display="none";
            var x= document.getElementById("incorrect");
            x.style.display="block";
        }
    };

    $rootScope.tryAgain = function() {

        var z= document.getElementById("incorrect");
        z.style.display="none";
        var x= document.getElementById("login");
        x.style.display="block";
    };



});
