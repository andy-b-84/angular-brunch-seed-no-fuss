'use strict';

/**
 * Displays a matching form
 * You'll have to provide a valid filter in order for questions to appear
 * @usage <form preferences-form="filter"></form>
 */
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
        },
        templateUrl: 'partials/preferences-form.html'
    };
});