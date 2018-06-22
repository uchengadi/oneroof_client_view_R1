/*
 * File: app/view/TopUpSubscriptionWin.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Cobuy.view.TopUpSubscriptionWin', {
    extend: 'Ext.window.Window',
    alias: 'widget.topupsubscriptionwin',

    requires: [
        'Cobuy.view.TopUpSubscriptionForm',
        'Ext.form.Panel'
    ],

    height: 500,
    width: 500,
    layout: 'fit',
    title: 'TopUp Subscription Quantity',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'topupsubscriptionform'
                }
            ]
        });

        me.callParent(arguments);
    }

});