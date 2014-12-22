'use strict';
/* Services*/

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

App.factory('Storage', function($window) {
    Storage.create = function(key, value) {
        $window.sessionStorage.setItem(key, value);
    };
    Storage.read = function(key) {
        return $window.sessionStorage.getItem(key);
    };
    Storage.update = function(key, value) {
        $window.sessionStorage.setItem(key, value);
    };
    Storage.delete = function(key) {
        $window.sessionStorage.removeItem(key);
    };
	return Storage;
});
