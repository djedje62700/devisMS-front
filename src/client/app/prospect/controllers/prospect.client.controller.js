(function () {
    'use strict';

    angular
        .module('app.prospect')
        .controller('ProspectController', ProspectController);

    ProspectController.$inject = ['logger',
        '$stateParams',
        '$http',
        '$location',
        'Prospect',
        'TableSettings',
        'ProspectForm'];
    /* @ngInject */
    function ProspectController(logger,
        $stateParams,
         $http,
        $location,
        Prospect,
        TableSettings,
        ProspectForm) {

        var vm = this;
        const baseurl = "https://madera-finance-ms-server.herokuapp.com/customer";
        vm.tableParams = TableSettings.getParams(Prospect);
        vm.prospect = {};

        vm.setFormFields = function(disabled) {
            vm.formFields = ProspectForm.getFormFields(disabled);
        };

        vm.create = function() {
            // Create new Prospect object
            var prospect = new Prospect(vm.prospect);

            // Redirect after save
            prospect.$save(function(response) {
                logger.success('Prospect created');
                $location.path('prospect');
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        // Remove existing Prospect
        vm.remove = function(prospect) {

            if (prospect) {
                prospect = Prospect.get({prospectId:prospect.id}, function() {
                    prospect.$remove(function() {
                        logger.success('Prospect deleted');
                        vm.tableParams.reload();
                    });
                });
            } else {
                vm.prospect.$remove(function() {
                    logger.success('Prospect deleted');
                    $location.path('/prospect');
                });
            }

        };

        // Update existing Prospect
        vm.update = function() {

            var prospect = vm.prospect;
            prospect.$update(function() {
                logger.success('Prospect mis à jour');
                $location.path('prospect/' + prospect.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };


        vm.toViewProspect = function() {
            vm.prospect = Prospect.get({prospectId: $stateParams.prospectId});
            vm.setFormFields(true);
        };

        vm.toEditProspect = function() {
            vm.prospect = Prospect.get({prospectId: $stateParams.prospectId});
            vm.setFormFields(false);
        };


        function getAllCustomer(){
            $http.get(baseurl).then(function success(response) {
                vm.customer = response.data;
                console.log(vm.customer);
            },function error(response) {
                console.log(response.statusText);
            })
        }

        getAllCustomer();

        vm.getCurrentCustomer = function (customer) {
          vm.currentCustomer = customer;
          console.log(vm.currentCustomer);
        };


        activate();

        function activate() {
            //logger.info('Activated Prospect View');
        }
    }

})();
