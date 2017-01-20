(function() {
    'use strict';

    angular
        .module('app.prospect')
        .factory('Prospect', Prospect);

    Prospect.$inject = ['$resource', 'API_BASE_URL'];
    /* @ngInject */
    function Prospect($resource, API_BASE_URL) {

        var params = {
            prospectId: '@id'
        };

        var actions = {
            update: {
                method: 'PUT'
            }
        };

        var API_URL = API_BASE_URL + '/prospect/:prospectId';

        return $resource(API_URL, params, actions);

    }

})();
