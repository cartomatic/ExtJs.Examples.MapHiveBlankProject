Ext.define('BlankProject.Application', {
    extend: 'mh.Application',
    name: 'BlankProject',

    quickTips: true,

    requires: [
        'BlankProject.ApiMap',
        'BlankProject.AppLauncher',
        'mh.util.DarkMode',
        'mh.mixin.InitialCfg',
        'mh.util.Cookie'
    ],

    mixins: [
        'mh.mixin.CallMeParent'
    ],

    //need to specify global controllers explicitly if overriding!
    // controllers: [
    //     'mh.controller.Root',
    //     'mh.controller.Auth',
    //     'mh.controller.Splash'
    // ],

    stores: [
        'BlankProject.store.RoutesMainMenu',
        'BlankProject.store.RoutesNonMainMenu'
    ],

    defaultToken: 'home',
    appShortName: 'blank-project',

    //here goes a custom app launcher class. If not overridden, it will default to mh.AppLauncher
    //Note: in this case TrajanDashboard.AppLauncher just inherits from mh.AppLauncher and is used instead
    appLauncher: 'BlankProject.AppLauncher',

    init: function(){
        //this should initiate the app in the ui mode previously saved and if no ui mode was saved before
        //a default dark mode will be saved
        mh.util.DarkMode.setUiModeSavedOrDefault('dark');

        this.callMeParent(arguments);
    },

    /**
     * internal app launch procedure
     * @param cfg
     * @param cfg.userConfig
     * @param cfg.orgCtx
     */
    internalAppLaunch: function(cfg){

        //<debug>
        console.log('[INTERNAL APP LAUNCH]_s::,red', 'cfg: ', cfg);
        //</debug>

        //first make sure the base does what's required!
        this.callMeParent('internalAppLaunch', arguments);

        //start the external route watcher - this will watch changes advised by a parent, and pass own changes to a parent
        this.fireGlobal('root::watchexternalroutes', {host: true});

        //finally force reroute to the specified route so the router kicks in and handles nav properly
        this.loadInitialRoute();
    },

    /**
     * loads initial route for the application
     */
    loadInitialRoute: function(){
        //finally force reroute to the specified route so the router kicks in and handles nav properly
        //make sure though to postpone this a bit, so all the other stuff that can still be potentially configuring has some time to finish
        Ext.defer(
            function(){
                this.redirectTo(window.location.hash.replace('#', ''), true);
            },
            250,
            this
        );
    }
});
