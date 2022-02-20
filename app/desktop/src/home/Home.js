//Disable some of the JSLint warnings
/*global window,console,Ext,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('BlankProject.view.home.Home', {
        extend: 'Ext.Panel',

        xtype: 'home',

        requires: [
            'BlankProject.view.home.Icons',
            'BlankProject.view.home.HomeController',
            'BlankProject.view.home.HomeViewModel'
        ],

        controller: 'home',
        viewModel: {
            type: 'home'
        },

        iconCls: mh.FontIconsDictionary.getIcon('homeViewHeader'),

        padding: 10,

        bind: {
            title: '{localization.viewName}',
            html: '{localization.helloWorld}'
        }

    });

}());