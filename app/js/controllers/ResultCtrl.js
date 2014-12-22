/**
 * Displays which preferences the user checked
 */
App.controller('ResultCtrl', ['$scope', 'Storage', function($scope, Storage) {
    $scope.preferences = [];
    for (var key in Storage.keys) {
        var value = Storage.read(key);
        if ('true' == value) {
            $scope.preferences.push(Storage.keys[key]);
        }
    }
}]);