(function() {
    'use strict';

    angular
        .module('app.prospect')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'listProspect',
                config: {
                    url: '/prospect',
                    templateUrl: 'app/prospect/views/list.html',
                    controller: 'ProspectController',
                    controllerAs: 'vm',
                    title: 'List Prospects',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-user"></i> Prospects'
                    }
                }
            },
            {
                state : "customer",
                config : {
                    url: "/customer",
                    templateUrl : "app/customer/customer.html",
                    controller: 'ProspectController',
                    controllerAs: 'vm',
                    title : "List customer",
                    settings : {
                        nav : 4,
                        content : '<i class="fa fa-home"></i>Clients'
                    }

                }

            },
            {
                state : "editCustomer",
                config : {
                    url: "customer/:customerId/editCustomer",
                    templateUrl : "app/customer/editCustomer.html",
                    controller: 'ProspectController',
                    controllerAs: 'vm',
                    title : "Edit customer"

                }

            },
            {
                state: 'createProspect',
                config: {
                    url: '/prospect/create',
                    templateUrl: 'app/prospect/views/create.html',
                    controller: 'ProspectController',
                    controllerAs: 'vm',
                    title: 'Create Prospect'
                }
            },
            {
                state: 'viewProspect',
                config: {
                    url: '/prospect/:prospectId',
                    templateUrl: 'app/prospect/views/view.html',
                    controller: 'ProspectController',
                    controllerAs: 'vm',
                    title: 'View Prospect'
                }
            },
            {
                state: 'editProspect',
                config: {
                    url: '/prospect/:prospectId/edit',
                    templateUrl: 'app/prospect/views/edit.html',
                    controller: 'ProspectController',
                    controllerAs: 'vm',
                    title: 'Edit Prospect'
                }
            }
        ];
    }
})();
