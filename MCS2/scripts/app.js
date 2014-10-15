
angular.module('todo', ['ionic'])

.controller('TodoCtrl', function ($scope) {
    $scope.tasks = [
      { title: 'Collect coins' },
      { title: 'Eat mushrooms' },
      { title: 'Get high enough to grab the flag' },
      { title: 'Find the Princess' }
    ];
});

(function () {

    // store a reference to the application object that will be created
    // later on so that we can use it if need be
    var app;

    // create an object to store the models for each view
    window.APP = {
        models: {
            home: {
                title: 'Home'
            },
            settings: {
                title: 'Settings'
            },
            contacts: {
                title: 'Contacts',
                ds: new kendo.data.DataSource({
                    data: [{ id: 1, name: 'Bob' }, { id: 2, name: 'Mary' }, { id: 3, name: 'John' }]
                }),
                alert: function (e) {
                    alert(e.data.name);
                }
            }
        }
    };

    // this function is called by Cordova when the application is loaded by the device
    document.addEventListener('deviceready', function () {

        // hide the splash screen as soon as the app is ready. otherwise
        // Cordova will wait 5 very long seconds to do it for you.
        //navigator.splashscreen.hide();

        var analytics = window.plugins.EqatecAnalytics;
        var settings = analytics.Factory.CreateSettings("91c6fa50595b44a7925bd96151f1add5", "1.06");
        analytics.Factory.CreateMonitorWithSettings(settings, monitorCreated, monitorCreationFailed);


        app = new kendo.mobile.Application(document.body, {

            // comment out the following line to get a UI which matches the look
            // and feel of the operating system
            //skin: 'flat',

            // the application needs to know which view to load first
            initial: 'views/home.html'
        });

    }, false);


}());