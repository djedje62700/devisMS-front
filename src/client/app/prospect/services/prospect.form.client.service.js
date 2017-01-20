(function() {
    'use strict';

    angular
        .module('app.prospect')
        .factory('ProspectForm', factory);

    function factory() {

        var getFormFields = function(disabled) {

            var fields = [
                {
                    key: 'name',
                    type: 'input',
                    templateOptions: {
                        label: 'Nom:',
                        disabled: disabled,
                        required: true
                    }
                },
                {
                    key: 'firstname',
                    type: 'input',
                    templateOptions: {
                        label: 'Prénom:',
                        disabled: disabled
                    }
                },
                {
                    key: 'address',
                    type: 'input',
                    templateOptions: {
                        label: 'Adresse',
                        disabled: disabled,
                        required: true
                    }
                },
                {
                    key: 'country',
                    type: 'input',
                    templateOptions: {
                        label: 'Pays',
                        disabled: disabled,
                        required: true
                    }
                },
                {
                    key: 'phoneNumber',
                    type: 'input',
                    templateOptions: {
                        label: 'Numéro de téléphone',
                        disabled: disabled,
                        required: true
                    }
                },
                {
                    key: 'mailAddress',
                    type: 'input',
                    templateOptions: {
                        label: 'Adresse email',
                        disabled: disabled,
                        required: true
                    }
                },
                {
                key: 'devis', 
                type: 'textarea',
                templateOptions: {
                    disabled : disabled,
label:"Attribuer un devis",
                required: false ,
                }
                }  

            ];

            return fields;

        };

        var service = {
            getFormFields: getFormFields
        };

        return service;

    }

})();
