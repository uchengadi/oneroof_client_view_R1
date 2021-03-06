/*
 * File: app/view/ProductInCartDetailWin.js
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

Ext.define('Cobuy.view.ProductInCartDetailWin', {
    extend: 'Ext.window.Window',
    alias: 'widget.productincartdetailwin',

    requires: [
        'Cobuy.view.ProductsDetailPanel',
        'Ext.form.Panel',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.toolbar.Fill',
        'Ext.toolbar.Separator'
    ],

    height: 650,
    width: 1400,
    layout: 'fit',
    title: 'Product Details',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'productsdetailpanel'
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
                            itemId: 'removecartproductBtn',
                            iconCls: 'delete_1',
                            text: 'Remove Product From Cart'
                        },
                        {
                            xtype: 'button',
                            hidden: true,
                            itemId: 'loginBtn',
                            iconCls: 'logoff',
                            text: 'Login to add product to cart'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            itemId: 'savecartproductBtn',
                            iconCls: 'save',
                            text: 'Save Modified Product Quantity'
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