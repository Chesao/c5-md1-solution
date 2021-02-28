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
    $scope.msgcolor = "red";
    $scope.items = "";

    $scope.checkLunch = function () {
        var inItems = $scope.items;
        var outItems = inItems
                        .replace(/\s{2,}/g,' ') // replace 2 or more white spaces with 1 space
                        .replace(/\s,/g,',')    // remove white space before comma
                        .replace(/,\s/g,',')    // remove white space after comma
                        .replace(/,{2,}/g,',')  // replace 2 or more commas with 1 comma
                        .replace(/,$/,'')       // remove tailing comma
                        .replace(/^,/,'');      // remove heading comma
        var item = outItems.split(",");

        console.log(item);
        console.log(item.length);
        if (item.length == 1 && item[0]=="") {
            $scope.message = msgs[0];
            $scope.msgcolor = "red";
        }
        else if (item.length <= 3) {
            $scope.message = msgs[1];
            $scope.msgcolor = "green";
        }
        else {
            $scope.message = msgs[2];
            $scope.msgcolor = "green";
        }
    }
}

})();
