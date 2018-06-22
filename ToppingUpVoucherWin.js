/*
 * File: app/view/ToppingUpVoucherWin.js
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

Ext.define('Cobuy.view.ToppingUpVoucherWin', {
    extend: 'Ext.window.Window',
    alias: 'widget.toppingupvoucherwin',

    requires: [
        'Cobuy.view.ToppingUpVoucherForm',
        'Ext.form.Panel'
    ],

    height: 570,
    itemId: '',
    width: 580,
    layout: 'fit',
    title: 'Topping Up Voucher',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'toppingupvoucherform'
                }
            ]
        });

        me.callParent(arguments);
    }

});