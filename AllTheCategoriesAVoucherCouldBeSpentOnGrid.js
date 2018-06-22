/*
 * File: app/view/AllTheCategoriesAVoucherCouldBeSpentOnGrid.js
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

Ext.define('Cobuy.view.AllTheCategoriesAVoucherCouldBeSpentOnGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.allthecategoriesavouchercouldbespentongrid',

    requires: [
        'Ext.grid.RowNumberer',
        'Ext.grid.View',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.toolbar.Separator',
        'Ext.toolbar.Fill'
    ],

    height: 250,
    width: 400,
    store: 'CategoriesLimitedToVoucher',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'rownumberer',
                    width: 40,
                    dataIndex: 'string',
                    text: 'S/n'
                },
                {
                    xtype: 'gridcolumn',
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                        var categoryStore = Ext.getStore('Categories');
                        var category = categoryStore.findRecord('id', value);
                        return category!== null ? category.get('name'): value;
                    },
                    width: 250,
                    dataIndex: 'category_id',
                    text: 'Category'
                },
                {
                    xtype: 'gridcolumn',
                    width: 250,
                    dataIndex: 'status',
                    text: 'Status'
                },
                {
                    xtype: 'gridcolumn',
                    width: 180,
                    dataIndex: 'expendable_limits_in_percentage',
                    text: 'Expendable Limit in %'
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'viewproductsincategoryBtn',
                            text: 'View Products in this category'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'tbseparator'
                        },
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