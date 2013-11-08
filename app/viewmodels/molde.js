define(['knockout','services/yr'], function(ko, yr){
    var ctor = function () {
        var that = this;
        that.moldeData = ko.observableArray();

        yr.search('molde').done(function(data){
			for(var x=0; x<data.length; x++) {
				getForecastAndAdd(data[x]);
        	};
        })

        function getForecastAndAdd(city) {
        		var internal = city;
        		internal.forecast = ko.observable();
        		yr.get(internal.bmurl).done(function(forecast) {
        			internal.forecast(forecast);
        			that.moldeData.push(internal);
        		})
        };

    };


    return ctor;
});