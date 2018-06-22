/*
 * File: app/view/ProductCentralForm.js
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

Ext.define('Cobuy.view.ProductCentralForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.productcentralform',

    requires: [
        'Ext.form.FieldSet',
        'Ext.form.field.Text',
        'Ext.button.Button',
        'Ext.form.Label',
        'Ext.grid.Panel',
        'Ext.toolbar.Toolbar',
        'Ext.grid.RowNumberer',
        'Ext.grid.column.Date',
        'Ext.grid.View'
    ],

    height: 250,
    id: 'productcentral',
    width: 400,
    layout: 'fit',
    bodyPadding: 10,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'fieldset',
                    title: 'Product Central',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'fieldset',
                            flex: 1,
                            margin: '0 0 0 10',
                            autoScroll: true,
                            title: 'Merchant Trading List Manager',
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'container',
                                    flex: 2
                                },
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    layout: 'fit',
                                    items: [
                                        {
                                            xtype: 'fieldset',
                                            margin: 5,
                                            title: 'Request to add a product to merchant\'s trading list',
                                            items: [
                                                {
                                                    xtype: 'container',
                                                    margin: 10,
                                                    layout: {
                                                        type: 'hbox',
                                                        align: 'stretch'
                                                    },
                                                    items: [
                                                        {
                                                            xtype: 'textfield',
                                                            flex: 13,
                                                            itemId: 'productBox',
                                                            fieldLabel: 'Add product/services to my trading list',
                                                            labelWidth: 250,
                                                            name: 'product',
                                                            emptyText: 'enter product code'
                                                        },
                                                        {
                                                            xtype: 'button',
                                                            flex: 2,
                                                            itemId: 'applyBtn',
                                                            margin: '0 0 0 10',
                                                            text: 'Apply'
                                                        },
                                                        {
                                                            xtype: 'button',
                                                            flex: 1,
                                                            itemId: 'tradableproductBtn',
                                                            margin: '0 0 0 3',
                                                            text: '...'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    flex: 2,
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        {
                                            xtype: 'container',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'container',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'container',
                                            flex: 1,
                                            items: [
                                                {
                                                    xtype: 'fieldset',
                                                    margin: 10,
                                                    title: 'How to get the product code',
                                                    items: [
                                                        {
                                                            xtype: 'label',
                                                            html: '<center><em>On the Store Main Page,Double click on the product  and get the Product Code from the displayed window</em><center>'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            flex: 1,
                            margin: '0 0 0 10',
                            autoScroll: true,
                            layout: 'fit',
                            title: 'Products on Merchant\'s Trading List',
                            items: [
                                {
                                    xtype: 'gridpanel',
                                    id: 'tradableproductsforvendorGrid',
                                    itemId: 'tradableproductsforvendorGrid',
                                    autoScroll: true,
                                    title: 'List of Products/Services on Merchant\'s Trading List',
                                    store: 'VendorTradableProducts',
                                    dockedItems: [
                                        {
                                            xtype: 'toolbar',
                                            dock: 'top',
                                            items: [
                                                {
                                                    xtype: 'button',
                                                    itemId: 'removetradableproductBtn',
                                                    iconCls: 'delete_1',
                                                    text: 'Remove Product From My Trading List'
                                                }
                                            ]
                                        }
                                    ],
                                    columns: [
                                        {
                                            xtype: 'rownumberer',
                                            minWidth: 40,
                                            dataIndex: 'string',
                                            text: 'S/n'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'status',
                                            text: 'Status'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                                var productStore = Ext.getStore('AllProducts');
                                                var product = productStore.findRecord('id', value);
                                                return product!== null ? product.get('name'): value;
                                            },
                                            width: 250,
                                            dataIndex: 'product_id',
                                            text: 'Product'
                                        },
                                        {
                                            xtype: 'datecolumn',
                                            width: 250,
                                            dataIndex: 'date_product_was_added_to_vendor',
                                            text: 'Date Product was Added'
                                        },
                                        {
                                            xtype: 'datecolumn',
                                            width: 250,
                                            dataIndex: 'date_product_to_vendor_was_updated',
                                            text: 'Date Product was Updated'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                                var userStore = Ext.getStore('AllMembers');
                                                var user = userStore.findRecord('id', value);
                                                if(user.get('middlename') === null || user.get('middlename') === undefined){
                                                    var name = user.get('firstname') + " " + user.get('lastname');
                                                }else{
                                                    var name = user.get('firstname') + " " + user.get('middlename') + " " + user.get('lastname');
                                                }

                                                return user!== null ? name: value;
                                            },
                                            width: 250,
                                            dataIndex: 'product_was_added_by',
                                            text: 'Product was Added By'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                                var userStore = Ext.getStore('AllMembers');
                                                var user = userStore.findRecord('id', value);
                                                if(user.get('middlename') === null || user.get('middlename') === undefined){
                                                    var name = user.get('firstname') + " " + user.get('lastname');
                                                }else{
                                                    var name = user.get('firstname') + " " + user.get('middlename') + " " + user.get('lastname');
                                                }

                                                return user!== null ? name: value;
                                            },
                                            width: 250,
                                            dataIndex: 'product_was_updated_by',
                                            text: 'Product was Updated By'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});