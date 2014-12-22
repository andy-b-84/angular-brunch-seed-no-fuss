App.controller('QuizzCtrl', ['$scope', '$location', 'Storage', function($scope, $location, Storage) {
    $scope.matchingForm = {};

	$scope.matchingForm.quizzes = [{
        key: 'pizza',
		text: "I like pizza",
		done: false,
        type: 'v1.0'
	}, {
        key: 'mms',
		text: "I like M&m's",
        done: false,
        type: 'v1.0'
    }, {
        key: 'h2',
		text: "I like hitchhiking",
        done: false,
        type: 'v1.0'
    }, {
        key: 'sw',
		text: "I like swimming",
        done: false,
        type: 'v1.0'
    }, {
        key: 'girls',
		text: "I like girls",
        done: false,
        type: 'v1.0'
    }, {
        key: 'boys',
		text: "I like boys",
        done: false,
        type: 'v1.0'
    }, {
        key: 'mam',
        text: "I like mammoths",
        done: false,
        type: 'v2.0'
    }, {
        key: 'cat',
        text: "I like cats",
        done: false,
        type: 'v2.0'
    }];

    $scope.submitForm = function() {
        for (var quizz in $scope.matchingForm.quizzes) {
            Storage.create($scope.matchingForm.quizzes[quizz].key, $scope.matchingForm.quizzes[quizz].done);
        }
        $location.path('/result');
    }
}]);