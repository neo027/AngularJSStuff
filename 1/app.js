(function(){
  angular.module('LunchChecker',[])
  .controller('CheckTooMuchController', CheckTooMuchController);

  CheckTooMuchController.$inject = ['$scope'];
  function CheckTooMuchController($scope){
    $scope.message = "";
    $scope.color = "green";
    $scope.checkLunch = function(){
      if ($scope.lunch_menu) {
        $scope.color = "green";
        $scope.lunch_menu = $scope.lunch_menu.trim();
        var food_items = $scope.lunch_menu.split(",");
        if(food_items.length > 0 && food_items.length <= 3){
          $scope.message = "Enjoy!";
        }
        else{
          $scope.message = "Too Much!";
        }
      }
      else{
        $scope.message = "Please enter data first!";
        $scope.color = "red";
      }
    }
  }
})();
