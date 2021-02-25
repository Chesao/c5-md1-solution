(function () {
'use strict';

angular.module("LunchCheck",[])
.controller("LunchCheckController",LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    var msgs = [
        "Please enter data first",
        "Enjoy!",
        "Too much!"
    ];
    $scope.message = msgs[0];
    $scope.fontcolor = "red";
    $scope.items = "";

    $scope.checkLunch = function () {
        var orgitems = $scope.items;
        var commaitems = orgitems.replace(/\s/g,'');
        var lastcommaitems = commaitems.replace(/,{2,}/g,',');
        var items = lastcommaitems.replace(/,$/,'');
        var item = items.split(",");
        var imsg = 0;

        console.log(orgitems);
        console.log(commaitems);
        console.log(lastcommaitems);
        console.log(items);
        if (item.length == 1 && item[0]=="") {
            imsg = 0;
            $scope.fontcolor = "red";
        }
        else if (item.length <= 3) {
            imsg = 1;
            $scope.fontcolor = "green";
        }
        else {
            imsg = 2;
            $scope.fontcolor = "green";
        }
        console.log(item.length);
        console.log(imsg);
        $scope.message = msgs[imsg];
    }
}

})();
