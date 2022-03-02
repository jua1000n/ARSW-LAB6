var Module = (function () {

    var _privateMethod = function () {

    };

    var publicMethod = function () {
        _privateMethod();
    };

    return {
        publicMethod: publicMethod
    };

})();