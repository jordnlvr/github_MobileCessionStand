/* Seale Core js v2014
*  Copyright 2014 SealeCorp. All rights reserved.
*/

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function goBack() {
    app.navigate("#:back");
}

(function (g) {

    var productId = "91c6fa50595b44a7925bd96151f1add5"; // App unique product key

    // Make analytics available via the window.analytics variable
    // Start analytics by calling window.analytics.Start()
    var analytics = g.analytics = g.analytics || {};
    analytics.Start = function () {
        // Handy shortcuts to the analytics api
        var factory = window.plugins.EqatecAnalytics.Factory;
        var monitor = window.plugins.EqatecAnalytics.Monitor;
        // Create the monitor instance using the unique product key for Analytics
        var settings = factory.CreateSettings(productId);
        settings.LoggingInterface = factory.CreateTraceLogger();
        factory.CreateMonitorWithSettings(settings,
		  function () {
		      console.log("Monitor created");
		      // Start the monitor inside the success-callback
		      monitor.Start(function () {
		          console.log("Monitor started");
		      });
		  },
		  function (msg) {
		      console.log("Error creating monitor: " + msg);
		  });
    }
    analytics.Stop = function () {
        var monitor = window.plugins.EqatecAnalytics.Monitor;
        monitor.Stop();
    }
    analytics.Monitor = function () {
        return window.plugins.EqatecAnalytics.Monitor;
    }
})(window);