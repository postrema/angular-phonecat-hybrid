'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    template: require('./phone-list.template.html'),
    //templateUrl: 'test.html',
    //templateUrl: './phone-list.template.html',
    //templateUrl: './app-ajs/phone-list/phone-list.template.html',
    controller: ['Phone',
      function PhoneListController(Phone) {
        this.phones = Phone.query();
        this.orderProp = 'age';
      }
    ]
  });