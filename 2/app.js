(function(){
  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
      toBuy = this;
      toBuy.toBuyList = ShoppingListCheckOffService.getToBuyList();

      toBuy.Bought = function(index){
        return ShoppingListCheckOffService.buyItem(index);
      }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var bought = this;

    bought.boughtList = ShoppingListCheckOffService.getBoughtList();

  }

  function ShoppingListCheckOffService(){
    var service = this;
    var toBuyShoppingList = [
            { name: "Cookies", quantity: 10 },
            { name: "Coke Bottle", quantity: 20},
            { name: "Noodles", quantity: 5},
            { name: "Chocolates", quantity: 50},
            { name: "Chips", quantity: 20}
        ];

      var boughtshoppingList = [];

    service.getToBuyList = function(){
      return toBuyShoppingList;
    };

    service.getBoughtList = function(){
      return boughtshoppingList;
    };

    service.buyItem = function(index){
      var item = toBuyShoppingList.splice(index,1)[0];
      boughtshoppingList.push(item);
    }
  }

})();
