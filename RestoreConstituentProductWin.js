/*
 * File: app/view/RestoreConstituentProductWin.js
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

Ext.define('Cobuy.view.RestoreConstituentProductWin', {
    extend: 'Ext.window.Window',
    alias: 'widget.restoreconstituentproductwin',

    requires: [
        'Cobuy.view.RestoreConstituentProductForm',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.toolbar.Fill',
        'Ext.toolbar.Separator',
        'Ext.form.Panel'
    ],

    height: 500,
    width: 500,
    layout: 'fit',
    title: 'Restore a product constituent',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'closeBtn',
                            iconCls: 'delete_1',
                            text: 'Close'
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            itemId: 'restoreBtn',
                            iconCls: 'add',
                            text: 'Restore this Product'
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'restoreconstituentproductform'
                }
            ]
        });

        me.callParent(arguments);
    }

});