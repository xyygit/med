app.directive('repeatFinish',function(){
    return {
        link: function(scope,element,attr){
            console.log(scope.$index)
            if(scope.$last == true){
                console.log('ng-repeat执行完毕')
                scope.$eval( attr.repeatFinish )
            }
        }
    }
});

app.directive('onFinishRender', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit('ngRepeatFinished');
                });
            }
        }
    }
});