(function(){
    if(typeof(__mhcfg__) === 'undefined'){
        __mhcfg__ = {};
    }

    let debug = window.location.href.indexOf('debug=true') >= 0,
        test = window.location.href.indexOf('-test') >= 0 || window.location.href.indexOf('test=true') >= 0,
        getUrl = function(endPoint){
            return (debug
                ? __mhcfg__.apiEndPoints[endPoint].dev
                : test
                    ? __mhcfg__.apiEndPoints[endPoint].test
                    :__mhcfg__.apiEndPoints[endPoint].production
            );
        };

    //customise and add endpoints as required
    __mhcfg__.apiEndPoints = {
        authApi: {
            dev: 'https://localhost:5003/auth/',
            production: 'https://trajan-mh-core-api.maphive.net/auth/',
            test: 'https://trajan-mh-core-api-test.maphive.net/auth/'
            //token: ''
        },
        coreApi: {
            dev: 'https://localhost:5003/',
            production: 'https://trajan-mh-core-api.maphive.net/',
            test: 'https://trajan-mh-core-api-test.maphive.net/'
        },
        trajanDashboardApi: {
            dev: 'https://localhost:5005/',
            production: 'https://trajan-dashboard-api.maphive.net/',
            test: 'https://trajan-dashboard-api-test.maphive.net/'
        },
        trajanDashboardDataServiceApi: {
            dev: 'https://localhost:5007/',
            production: 'https://trajan-dashboard-data-service-api.maphive.net/',
            test: 'https://trajan-dashboard-data-service-api-test.maphive.net/'
        }
    };

    for(apiEndPoint in __mhcfg__.apiEndPoints){
        __mhcfg__.apiEndPoints[apiEndPoint].url = getUrl(apiEndPoint);
        delete __mhcfg__.apiEndPoints[apiEndPoint].dev;
        delete __mhcfg__.apiEndPoints[apiEndPoint].production;
    }

    //namespaces to get the localization for
    __mhcfg__.namespacesToLocalize = [
        'mh', 'TrajanDashboard'
    ];

    //total header to extract total dataset counts when reading lists
    __mhcfg__.headerTotal = 'x-total-count';
}());
