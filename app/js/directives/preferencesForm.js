'use strict';

// register the module with Angular
App.directive('preferencesForm', function(){
    return {
        link: function(scope, element, attrs, tabsCtrl) {
            var quizzes = [];
            for (var quizz in scope.matchingForm.quizzes) {
                if (scope.matchingForm.quizzes[quizz].type == attrs['preferencesForm']) {
                    quizzes.push(scope.matchingForm.quizzes[quizz]);
                }
            }
            scope.matchingForm.quizzes = quizzes;
            console.log(scope.matchingForm.quizzes);
        },
        templateUrl: 'partials/preferences-form.html'
    };
});