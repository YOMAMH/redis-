/**
 * Created by renminghe on 16/7/10.
 */
angular.module('myApp',[]).
    controller('myController',['$scope','$http', function ($scope,$http) {
    $scope.pick = function () {
        var users = ["东方不败","任我行","诸葛孔明","张飞","赵云"];
        var user = users[Math.floor((Math.random()*4))];

       $http.get('/getmsg?user='+user).success(function (data) {
        console.log(data);

       }).error(function (data) {

       });
    };
}]);