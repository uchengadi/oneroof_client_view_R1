/*
 * File: app/view/ComparisonOfProductSubscriptionTypesWin.js
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

Ext.define('Cobuy.view.ComparisonOfProductSubscriptionTypesWin', {
    extend: 'Ext.window.Window',
    alias: 'widget.comparisonofproductsubscriptiontypeswin',

    requires: [
        'Cobuy.view.ComparisonOfProductSubscriptionTypesForm',
        'Ext.form.Panel',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button'
    ],

    height: 350,
    width: 550,
    layout: 'fit',
    title: 'Comparison between Product Subscription types',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'comparisonofproductsubscriptiontypesform'
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'closeBtn',
                            iconCls: 'cancel',
                            text: 'Close'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});