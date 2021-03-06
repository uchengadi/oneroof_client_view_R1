/*
 * File: app/view/ProductImagesViewWin.js
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

Ext.define('Cobuy.view.ProductImagesViewWin', {
    extend: 'Ext.window.Window',
    alias: 'widget.productimagesviewwin',

    requires: [
        'Cobuy.view.ProductImagesMainpanel',
        'Ext.toolbar.Toolbar',
        'Ext.toolbar.Fill',
        'Ext.button.Button',
        'Ext.form.Panel',
        'Ext.form.field.Hidden'
    ],

    height: 600,
    width: 600,
    layout: 'fit',
    title: 'Product Images',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'productimagesmainpanel'
                },
                {
                    xtype: 'form',
                    hidden: true,
                    itemId: 'productparameters',
                    bodyPadding: 10,
                    title: 'My Form',
                    items: [
                        {
                            xtype: 'hiddenfield',
                            anchor: '100%',
                            fieldLabel: 'Label',
                            name: 'type_id'
                        },
                        {
                            xtype: 'hiddenfield',
                            anchor: '100%',
                            fieldLabel: 'Label',
                            name: 'product_id'
                        },
                        {
                            xtype: 'hiddenfield',
                            anchor: '100%',
                            fieldLabel: 'Label',
                            name: 'service_id'
                        },
                        {
                            xtype: 'hiddenfield',
                            anchor: '100%',
                            fieldLabel: 'Label',
                            name: 'category_id'
                        },
                        {
                            xtype: 'hiddenfield',
                            anchor: '100%',
                            fieldLabel: 'Label',
                            name: 'id'
                        }
                    ]
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            itemId: 'closeBtn',
                            iconCls: 'delete',
                            text: 'Close'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});