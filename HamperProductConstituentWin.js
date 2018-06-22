/*
 * File: app/view/HamperProductConstituentWin.js
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

Ext.define('Cobuy.view.HamperProductConstituentWin', {
    extend: 'Ext.window.Window',
    alias: 'widget.hamperproductconstituentwin',

    requires: [
        'Cobuy.view.HamperProductConstituents',
        'Ext.form.Panel',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.toolbar.Fill',
        'Ext.toolbar.Separator'
    ],

    height: 650,
    id: 'constituentproductdetailswin1',
    width: 1200,
    layout: 'fit',
    title: 'Constituent Product\'s Details ',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'hamperproductconstituents'
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
                            iconCls: 'delete',
                            text: 'Close'
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            hidden: true,
                            itemId: 'removeproductBtn',
                            iconCls: 'delete_1',
                            text: 'Remove this product from the Pack'
                        },
                        {
                            xtype: 'button',
                            hidden: true,
                            itemId: 'loginBtn',
                            iconCls: 'key',
                            text: 'Login to view Product Price'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            hidden: true,
                            itemId: 'effectchangeBtn',
                            iconCls: 'add',
                            text: 'Change the Quantity of this Product in the Pack'
                        },
                        {
                            xtype: 'button',
                            hidden: true,
                            itemId: 'joinBtn',
                            iconCls: 'user',
                            text: 'Become a Member'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});