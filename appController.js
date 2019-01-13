var myApp = angular.module("myApp",['ui-router']);
myApp.config(function($stateProvider){
    $stateProvider
    .state('list',{
      url:'/list',
      templateUrl:'data.html',
      controller:'myController'
    })
})



myApp.controller('myController',function($scope){
    console.log('in controller');
    var message = 'Hi i am your controller';
})