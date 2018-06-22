/*
 * File: app/view/ProductsDetailWin.js
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

Ext.define('Cobuy.view.ProductsDetailWin', {
    extend: 'Ext.window.Window',
    alias: 'widget.productsdetailwin',

    requires: [
        'Cobuy.view.ProductsDetailPanel',
        'Ext.form.Panel',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.toolbar.Fill',
        'Ext.toolbar.Separator'
    ],

    height: 650,
    id: 'productsdetailwin',
    width: 1250,
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
                            hidden: true,
                            itemId: 'removecartproductBtn',
                            iconCls: 'delete_1',
                            text: 'Remove Product From Cart'
                        },
                        {
                            xtype: 'button',
                            hidden: true,
                            itemId: 'undodrawdownBtn',
                            iconCls: 'delete_1',
                            text: 'Undo Presubscription Drawdown'
                        },
                        {
                            xtype: 'button',
                            hidden: true,
                            itemId: 'loginBtn',
                            iconCls: 'key',
                            text: 'Login to add product to cart'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            hidden: true,
                            itemId: 'addtocartBtn',
                            iconCls: 'cart',
                            text: 'Add to Cart'
                        },
                        {
                            xtype: 'button',
                            disabled: true,
                            hidden: true,
                            itemId: 'sendaquoteBtn',
                            iconCls: 'cart',
                            text: 'Send a quote'
                        },
                        {
                            xtype: 'button',
                            disabled: true,
                            hidden: true,
                            itemId: 'sendtoescrowBtn',
                            iconCls: 'cart',
                            text: 'Send to Escrow Administrator'
                        },
                        {
                            xtype: 'button',
                            hidden: true,
                            itemId: 'savecartproductBtn',
                            iconCls: 'save',
                            text: 'Effect Product Changes'
                        },
                        {
                            xtype: 'button',
                            hidden: true,
                            itemId: 'joinBtn',
                            iconCls: 'user',
                            text: 'Register'
                        },
                        {
                            xtype: 'button',
                            hidden: true,
                            itemId: 'removefromtradinglist',
                            iconCls: 'user',
                            text: 'Remove from my Trading List'
                        },
                        {
                            xtype: 'button',
                            hidden: true,
                            itemId: 'schedulesubscriptiondeliveryBtn',
                            iconCls: 'user',
                            text: 'Schedule Product Subscription Delivery'
                        },
                        {
                            xtype: 'button',
                            hidden: true,
                            itemId: 'unsubscribeBtn',
                            iconCls: 'user',
                            text: 'Unsubscribe'
                        },
                        {
                            xtype: 'button',
                            hidden: true,
                            itemId: 'topupsubscriptionBtn',
                            iconCls: 'user',
                            text: 'TopUp Subscription Quantity'
                        },
                        {
                            xtype: 'button',
                            hidden: true,
                            itemId: 'escrowsubscriptionBtn',
                            iconCls: 'user',
                            text: 'Escrow This Subscription'
                        },
                        {
                            xtype: 'button',
                            hidden: true,
                            itemId: 'drawdownonsubscriptionBtn',
                            iconCls: 'user',
                            text: 'Drawdown on Subscription'
                        },
                        {
                            xtype: 'button',
                            hidden: true,
                            itemId: 'modifythisquoteBtn',
                            iconCls: 'user',
                            text: 'Modify Quote'
                        },
                        {
                            xtype: 'button',
                            hidden: true,
                            itemId: 'cancelthisquoteBtn',
                            iconCls: 'user',
                            text: 'Cancel Quote Request'
                        },
                        {
                            xtype: 'button',
                            hidden: true,
                            itemId: 'sendthisquoteresponseBtn',
                            iconCls: 'user',
                            text: 'Send Quote'
                        },
                        {
                            xtype: 'button',
                            hidden: true,
                            itemId: 'modifyingthisescrowBtn',
                            iconCls: 'user',
                            text: 'Modify Escrow'
                        },
                        {
                            xtype: 'button',
                            hidden: true,
                            itemId: 'cancellingthisescrowBtn',
                            iconCls: 'user',
                            text: 'Cancel Escrow'
                        },
                        {
                            xtype: 'button',
                            hidden: true,
                            itemId: 'invokingthisescrowBtn',
                            iconCls: 'user',
                            text: 'Invoke This Escrow'
                        },
                        {
                            xtype: 'button',
                            hidden: true,
                            itemId: 'sendtothehampertabBtn',
                            iconCls: 'user',
                            text: 'Send To Hamper Manager'
                        },
                        {
                            xtype: 'button',
                            hidden: true,
                            itemId: 'changethequantityofproductinhamperBtn',
                            iconCls: 'user',
                            text: 'Change the quantity of product in hamper'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});