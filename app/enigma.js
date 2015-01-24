define(['angular','$','_'],function(){
    angular.module('enigma',[])
    .controller('enigmaCtrl', ['$scope', function ($scope) {
        $scope.enigma = 'Enigma is getting decoded!';
    }]);
});
