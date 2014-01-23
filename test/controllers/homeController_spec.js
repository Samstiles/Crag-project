describe('homeController', function() {
    var scope;
    var rootScope;

    beforeEach(module('app'));
    beforeEach(inject(function(_$rootScope_, _$controller_) {
        rootScope = _$rootScope_;
        scope = _$rootScope_.$new();
        $controller = _$controller_;
        homeController = $controller('homeController', {
            $rootScope: rootScope,
            $scope: scope
        });
    }));
});
