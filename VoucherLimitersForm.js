/*
 * File: app/view/VoucherLimitersForm.js
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

Ext.define('Cobuy.view.VoucherLimitersForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.voucherlimitersform',

    requires: [
        'Cobuy.view.VoucherLimitedToProductsGrid',
        'Cobuy.view.VoucherLimitedToCategoriesGrid',
        'Ext.form.FieldSet',
        'Ext.form.field.TextArea',
        'Ext.form.field.Radio',
        'Ext.form.field.ComboBox',
        'Ext.button.Button',
        'Ext.form.field.Number',
        'Ext.form.Label',
        'Ext.grid.Panel',
        'Ext.form.field.Hidden'
    ],

    height: 500,
    width: 800,
    bodyPadding: 10,

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'container',
                    flex: 1,
                    margin: 5,
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'fieldset',
                            flex: 1,
                            title: 'Voucher Limiter Parameters',
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'container',
                                    flex: 0.8,
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        {
                                            xtype: 'container',
                                            flex: 2,
                                            layout: {
                                                type: 'vbox',
                                                align: 'stretch'
                                            },
                                            items: [
                                                {
                                                    xtype: 'textfield',
                                                    flex: 1,
                                                    fieldLabel: 'Voucher Number',
                                                    labelWidth: 120,
                                                    name: 'voucher_number'
                                                },
                                                {
                                                    xtype: 'textareafield',
                                                    flex: 2,
                                                    fieldLabel: 'Voucher Purpose',
                                                    labelWidth: 120,
                                                    name: 'purpose'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            flex: 1.5,
                                            layout: 'fit',
                                            items: [
                                                {
                                                    xtype: 'fieldset',
                                                    margin: '5 0 0 0',
                                                    title: 'Limit Voucher By',
                                                    items: [
                                                        {
                                                            xtype: 'container',
                                                            layout: {
                                                                type: 'hbox',
                                                                align: 'stretch'
                                                            },
                                                            items: [
                                                                {
                                                                    xtype: 'radiofield',
                                                                    flex: 1,
                                                                    itemId: 'categoryLimiterRadio',
                                                                    name: 'limit_by',
                                                                    boxLabel: 'Product Category',
                                                                    checked: true,
                                                                    inputValue: 'category'
                                                                },
                                                                {
                                                                    xtype: 'radiofield',
                                                                    flex: 1,
                                                                    itemId: 'productlimiterRadio',
                                                                    name: 'limit_by',
                                                                    boxLabel: 'Product',
                                                                    inputValue: 'product'
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
                                    xtype: 'container',
                                    flex: 1.5,
                                    itemId: 'categoryContainer',
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
                                            flex: 4,
                                            layout: 'fit',
                                            items: [
                                                {
                                                    xtype: 'fieldset',
                                                    title: 'Choose a Service Category',
                                                    items: [
                                                        {
                                                            xtype: 'container',
                                                            layout: {
                                                                type: 'hbox',
                                                                align: 'stretch'
                                                            },
                                                            items: [
                                                                {
                                                                    xtype: 'combobox',
                                                                    flex: 8,
                                                                    itemId: 'categoryBox',
                                                                    margin: 5,
                                                                    fieldLabel: 'Category',
                                                                    name: 'category',
                                                                    editable: false,
                                                                    displayField: 'name',
                                                                    store: 'Categories',
                                                                    valueField: 'id'
                                                                },
                                                                {
                                                                    xtype: 'button',
                                                                    flex: 1,
                                                                    itemId: 'addcategoryBtn',
                                                                    margin: 5,
                                                                    text: 'Add'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            xtype: 'numberfield',
                                                            anchor: '100%',
                                                            margin: 5,
                                                            fieldLabel: 'Category Expendable Limit (in %)',
                                                            labelWidth: 200,
                                                            name: 'category_expendable_limit_in_percentages',
                                                            value: '-1',
                                                            maxValue: 100,
                                                            minValue: -1
                                                        },
                                                        {
                                                            xtype: 'label',
                                                            margin: '20 0 0 0',
                                                            text: 'An expendable limit of   \'-1\'  means a no-limit status  on that category'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            flex: 1
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    flex: 1.5,
                                    hidden: true,
                                    itemId: 'productContainer',
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
                                            flex: 4,
                                            layout: 'fit',
                                            items: [
                                                {
                                                    xtype: 'fieldset',
                                                    title: 'Enter the Product Code',
                                                    items: [
                                                        {
                                                            xtype: 'container',
                                                            layout: {
                                                                type: 'hbox',
                                                                align: 'stretch'
                                                            },
                                                            items: [
                                                                {
                                                                    xtype: 'textfield',
                                                                    flex: 8,
                                                                    itemId: 'productBox',
                                                                    margin: 5,
                                                                    fieldLabel: 'Product Code',
                                                                    name: 'product_code'
                                                                },
                                                                {
                                                                    xtype: 'button',
                                                                    flex: 1,
                                                                    itemId: 'addproductBtn',
                                                                    margin: 5,
                                                                    text: 'Add'
                                                                },
                                                                {
                                                                    xtype: 'button',
                                                                    flex: 1,
                                                                    itemId: 'viewproductBtn',
                                                                    margin: 5,
                                                                    text: '...'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            xtype: 'numberfield',
                                                            anchor: '100%',
                                                            margin: 5,
                                                            fieldLabel: 'Product Expendable Limit (in %)',
                                                            labelWidth: 200,
                                                            name: 'product_expendable_limit_in_percentages',
                                                            value: '-1',
                                                            maxValue: 100,
                                                            minValue: -1
                                                        },
                                                        {
                                                            xtype: 'label',
                                                            margin: '20 0 0 0',
                                                            text: 'An expendable limit of  \'-1\' means a no-limit status  on that Product'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            flex: 1
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    flex: 1,
                    margin: 5,
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'container',
                            flex: 1,
                            hidden: true,
                            itemId: 'productlimiterContainer',
                            layout: 'fit',
                            items: [
                                {
                                    xtype: 'voucherlimitedtoproductsgrid'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            flex: 1,
                            itemId: 'categorylimiterContainer',
                            layout: 'fit',
                            items: [
                                {
                                    xtype: 'voucherlimitedtocategoriesgrid'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'hiddenfield',
                    flex: 1,
                    fieldLabel: 'Label',
                    name: 'id'
                }
            ]
        });

        me.callParent(arguments);
    }

});