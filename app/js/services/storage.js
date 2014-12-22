'use strict';

/**
 * list of askable questions
 * @type {{keys: {pizza: string, mms: string, h2: string, sw: string, girls: string, boys: string}}}
 */
var Storage = {
    keys: {
        pizza: 'I like pizza',
        mms: "I like M&m's",
        h2: 'I like hitchhiking',
        sw: 'I like swimming',
        girls: '*I like girls*',
        boys: '*I like boys*'
    }
}

/**
 * Persistance handling object
 * @usage App.controller('ResultCtrl', ['$scope', 'Storage', function($scope, Storage) {
 *   ...
 *   var value = Storage.read(key);
 *   ...
 * }
 */
App.factory('Storage', function($window) {
    /**
     * Saves value in session, in value key
     * @param key
     * @param value
     */
    Storage.create = function(key, value) {
        $window.sessionStorage.setItem(key, value);
    };
    /**
     * Returns key's value from session
     * @param key
     * @returns {*}
     */
    Storage.read = function(key) {
        return $window.sessionStorage.getItem(key);
    };
    /**
     * Updates key from session, with value
     * @param key
     * @param value
     */
    Storage.update = function(key, value) {
        $window.sessionStorage.setItem(key, value);
    };
    /**
     * Deletes key's value from session
     * @param key
     */
    Storage.delete = function(key) {
        $window.sessionStorage.removeItem(key);
    };
	return Storage;
});
