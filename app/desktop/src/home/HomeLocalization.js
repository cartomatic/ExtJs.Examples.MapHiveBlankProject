//Disable some of the JSLint warnings
/*global window,console,Ext,mh*/
(function(){
    //Make sure strict mode is on
    'use strict'
    
    Ext.define('BlankProject.view.home.HomeLocalization', {
        requires: [
            'mh.localization.Localization'
        ],
        statics: {
            localization: {
                viewName: {
                    en: 'Home',
                    pl: 'Home'
                },
                helloWorld: {
                    en: 'Hello MapHive',
                    pl: 'Hello MapHive'
                }
            }
        }

    }, function(){
        mh.localization.Localization.registerTranslations(this);
    });
}());
