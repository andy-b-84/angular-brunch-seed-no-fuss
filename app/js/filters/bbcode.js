'use strict';

/**
 * Replaces bbcode by corresponding HTML tags
 * @usage {{ someBBCodeEncodedText | bbcode }}
 */
App.filter('bbcode', function(){
    return function(input) {
        var regexp = /\*(.+)\*/;
        var matches = regexp.test(input);
        regexp.exec(input);
        return matches ? '<strong>'+RegExp.$1+'</strong>' : input;
    }
});