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
            date: "2017-03-20"
        },
        {
            title: "Montana Merton",
            username: "mmerton",
            date: "2017-05-09"
        }
    ];

});

app.filter('search', function() {
    return function(list, query) {
        if (!query) return list;
        return list.filter(function(item) {
            return !!(
                item.title.toLowerCase().indexOf(query.toLowerCase() || '') !== -1 ||
                item.username.toLowerCase().indexOf(query.toLowerCase() || '') !== -1 ||
                item.date.toLowerCase().indexOf(query.toLowerCase() || '') !== -1
            );
        });
    }
});
