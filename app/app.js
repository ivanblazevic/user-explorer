var app = angular.module("userExplorer", []);

app.controller("MainCtrl", function($scope) {

    $scope.users = [
        {
            title: "Maria Anders",
            username: "manders",
            date: "2017-08-12"
        },
        {
            title: "Westley Mordikai",
            username: "wmordikai",
            date: "2017-04-18"
        },
        {
            title: "Dee Lee",
            username: "dlee",
            date: "2016-01-22"
        },
        {
            title: "Jayce Carter",
            username: "jcarter",
            date: "2017-01-20"
        },
        {
            title: "Montana Merton",
            username: "mmerton",
            date: "2017-11-09"
        }
    ];

    $scope.order;
    $scope.reverse = false;

});
