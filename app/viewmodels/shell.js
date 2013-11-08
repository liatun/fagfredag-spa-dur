define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        activate: function () {
            router.map([
                { route: '', title:'Hello', moduleId: 'viewmodels/hello', nav: true },
                { route: 'hihi', title:'Hallais!', moduleId: 'viewmodels/hihi', nav: true },
                { route: 'molde', title:'Moldevær', moduleId: 'viewmodels/molde', nav: true },
            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});