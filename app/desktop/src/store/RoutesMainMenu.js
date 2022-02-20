//Disable some of the JSLint warnings
/*global window,console,Ext,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('BlankProject.store.RoutesMainMenu', {
        extend: 'mh.data.store.RoutesMainMenu',

        requires: [

            'mh.FontIconsDictionary',
            'mh.data.model.Route',
            'BlankProject.view.home.Home'
        ],


        //see comments in mh.data.model.Route on how to use the route models

        data: [
            {
                id: 'home',
                xtype: 'home',
                navigationRoute: 'home',
                iconCls: 'mainMenuHome'
            }
        ]
    });

}());