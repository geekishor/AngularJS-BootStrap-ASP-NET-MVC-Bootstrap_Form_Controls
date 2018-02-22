studentFormsApp.controller("homeController", 
    function ($scope, $location, $uibModal) {
        $scope.addNewStudent = function () {
            $uibModal.open({
                templateUrl: "app/StudentForm/sfTemplate.html",
                controller: "sfController" 
            });

        };
        $scope.updateStudent = function (id) {
            $location.path('/updateStudentForm/'+ id);  /*Here we are passing id. For 'updateStudentForm' we need to add route in StudentFormsApp.js*/
        };
    })