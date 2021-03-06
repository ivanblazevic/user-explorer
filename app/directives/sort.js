var app = angular.module("userExplorer");

app.directive("sort", function() {
    return {
        restrict: 'A',
        transclude: true,
        template:
        '<a ng-click="onClick()">'+
            '<span ng-transclude></span>'+
            '<i class="fa" ng-class="{ \'fa-chevron-up\': order === by && !reverse, \'fa-chevron-down\': order === by && reverse }" aria-hidden="true"></i>'+
        '</a>',
        scope: {
            order: '=',
            by: '=',
            reverse : '='
        },
        link: function(scope, element, attrs) {
            scope.onClick = function () {
                if (scope.order === scope.by) {
                    scope.reverse = !scope.reverse
                } else {
                    scope.by = scope.order;
                    scope.reverse = false;
                }
            }
        }
    }
});
