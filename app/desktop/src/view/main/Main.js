//Disable some of the JSLint warnings
/*global window,console,Ext,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('BlankProject.view.main.Main', {
        extend: 'mh.module.mainView.MainViewDesktop',

        requires: [
            'mh.module.settings.UserSettings',
            'BlankProject.view.main.Icons',
            'BlankProject.view.main.MainController'
        ],

        xtype: 'main',

        controller: 'main',

        //remove app switcher for the time being - no other apps for trajan!
        appSwitcher: null,

        //remove org ctx switcher - does not make sense for trajan dashboard
        orgContextSwitcher: null,

        //reload instead of trying to redirect to a default app
        navMenuLogOffReload: true,

        //no need for user settings section so far
        navMenuHideSettingsBtn: false
    });

}());