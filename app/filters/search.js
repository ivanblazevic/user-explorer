var app = angular.module("userExplorer");

/**
 * Filter array by multiple fields
 * @param list - array to filter
 * @param query - search string
 * @param fields - fields to filter by
 * @return array - returns filtered list
 */
app.filter('search', function() {
    return function(list, query, fields) {
        if (!query) return list;

        return list.filter(function(item) {
            function hasMatch(field) {
                return !!(item[field].toLowerCase().indexOf(query.toLowerCase() || '') !== -1);
            }
            return fields.some(hasMatch);
        });
    }
});
