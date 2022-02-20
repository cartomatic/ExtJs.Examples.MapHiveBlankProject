//Disable some of the JSLint warnings
/*global window,console,Ext,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';

    let logHdr = '[PERMALINK]_s::,pink,',
        currentOrg = null;

    Ext.define('BlankProject.view.home.HomeController', {
        extend: 'Ext.app.ViewController',
        alias: 'controller.home',

        requires: [
            'BlankProject.view.home.HomeLocalization'
        ],

        mixins: [
            'mh.mixin.CallMeParent',
            'mh.mixin.Localization'
        ],

        init: function(){
            this.callMeParent(arguments);
            this.injectLocalizationToViewModel();
        }

    });

}());