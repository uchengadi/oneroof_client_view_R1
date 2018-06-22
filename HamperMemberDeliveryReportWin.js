/*
 * File: app/view/HamperMemberDeliveryReportWin.js
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

Ext.define('Cobuy.view.HamperMemberDeliveryReportWin', {
    extend: 'Ext.window.Window',
    alias: 'widget.hampermemberdeliveryreportwin',

    requires: [
        'Cobuy.view.HamperMemberDeliveryReportForm',
        'Ext.form.Panel',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button'
    ],

    height: 640,
    width: 550,
    layout: 'fit',
    title: 'Delivery Report',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'hampermemberdeliveryreportform'
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