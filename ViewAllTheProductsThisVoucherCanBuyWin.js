/*
 * File: app/view/ViewAllTheProductsThisVoucherCanBuyWin.js
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

Ext.define('Cobuy.view.ViewAllTheProductsThisVoucherCanBuyWin', {
    extend: 'Ext.window.Window',
    alias: 'widget.viewalltheproductsthisvouchercanbuywin',

    requires: [
        'Cobuy.view.AllTheProductsAVoucherCouldBeUsedOnGrid',
        'Ext.grid.Panel',
        'Ext.form.Panel',
        'Ext.form.field.Hidden'
    ],

    height: 450,
    width: 650,
    layout: 'fit',
    title: 'The Products this voucher could be spent on',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'alltheproductsavouchercouldbeusedongrid'
                },
                {
                    xtype: 'form',
                    hidden: true,
                    itemId: 'voucheridform',
                    bodyPadding: 10,
                    title: 'My Form',
                    items: [
                        {
                            xtype: 'hiddenfield',
                            anchor: '100%',
                            fieldLabel: 'Label',
                            name: 'voucher_id'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});