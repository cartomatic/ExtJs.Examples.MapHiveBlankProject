//Disable some of the JSLint warnings
/*global window,console,Ext,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('BlankProject.AppLauncher', {
        requires: [
            'BlankProject.view.main.Main'
        ],

        constructor: function(config) {

            //disable aria warnings
            Ext.ariaWarn = Ext.emptyFn;

            Ext.util.Format.thousandSeparator = '.';
            Ext.util.Format.decimalSeparator = ',';

            //prevent default right click
            Ext.getBody().on(
                'contextmenu',
                function(e, target){
                    // don't show default context menu
                    e.preventDefault();
                }
            );

            Ext.create('BlankProject.view.main.Main');
        }

    });

}());