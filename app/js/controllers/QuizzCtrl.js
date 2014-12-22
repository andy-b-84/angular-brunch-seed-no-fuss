App.controller('QuizzCtrl', ['$scope', '$location', 'Storage', function($scope, $location, Storage) {
    $scope.matchingForm = {};

	$scope.matchingForm.quizzes = [{
        key: 'pizza',
		text: "I like pizza",
		done: false
	}, {
        key: 'mms',
		text: "I like M&m's",
        done: false
    }, {
        key: 'h2',
		text: "I like hitchhiking",
        done: false
    }, {
        key: 'sw',
		text: "I like swimming",
        done: false
    }, {
        key: 'girls',
		text: "I like girls",
        done: false
    }, {
        key: 'boys',
		text: "I like boys",
        done: false
    }];

    $scope.submitForm = function() {
        for (var quizz in $scope.matchingForm.quizzes) {
            Storage.create($scope.matchingForm.quizzes[quizz].key, $scope.matchingForm.quizzes[quizz].done);
        }
        $location.path('/result');
    }
}]);