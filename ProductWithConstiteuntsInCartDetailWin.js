/*
 * File: app/view/ProductWithConstiteuntsInCartDetailWin.js
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

Ext.define('Cobuy.view.ProductWithConstiteuntsInCartDetailWin', {
    extend: 'Ext.window.Window',
    alias: 'widget.productwithconstiteuntsincartdetailwin',

    requires: [
        'Cobuy.view.ProductdetailsPanelForProductsWithConstituents',
        'Ext.form.Panel',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.toolbar.Fill',
        'Ext.toolbar.Separator'
    ],

    height: 650,
    id: 'productdetailspanelforproductswithconstituentswin1',
    width: 1400,
    layout: 'fit',
    title: 'Product Details for Products with Constituents',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'productdetailspanelforproductswithconstituents'
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
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            itemId: 'savecartproductBtn',
                            iconCls: 'save',
                            text: 'Save Modified Product Quantity'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});