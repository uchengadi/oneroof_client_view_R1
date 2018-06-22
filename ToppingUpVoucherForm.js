/*
 * File: app/view/ToppingUpVoucherForm.js
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

Ext.define('Cobuy.view.ToppingUpVoucherForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.toppingupvoucherform',

    requires: [
        'Ext.form.FieldSet',
        'Ext.form.field.Number',
        'Ext.form.field.Checkbox',
        'Ext.button.Button',
        'Ext.toolbar.Toolbar',
        'Ext.toolbar.Separator',
        'Ext.toolbar.Fill',
        'Ext.form.field.Hidden'
    ],

    layout: 'fit',
    bodyPadding: 10,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'fieldset',
                    title: 'Voucher Topup',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'container',
                            flex: 1,
                            layout: 'fit',
                            items: [
                                {
                                    xtype: 'fieldset',
                                    title: 'Total Voucher Value',
                                    items: [
                                        {
                                            xtype: 'container',
                                            layout: {
                                                type: 'hbox',
                                                align: 'stretch'
                                            },
                                            items: [
                                                {
                                                    xtype: 'numberfield',
                                                    flex: 10,
                                                    itemId: 'thitotalsvoucherBox',
                                                    margin: 10,
                                                    fieldLabel: 'Total Voucher Value(=N=)',
                                                    labelWidth: 200,
                                                    name: 'voucher_value',
                                                    readOnly: true,
                                                    allowBlank: false,
                                                    minValue: 0
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
                            layout: 'fit',
                            items: [
                                {
                                    xtype: 'fieldset',
                                    title: 'Unallocated Voucher Value',
                                    items: [
                                        {
                                            xtype: 'container',
                                            layout: {
                                                type: 'hbox',
                                                align: 'stretch'
                                            },
                                            items: [
                                                {
                                                    xtype: 'numberfield',
                                                    flex: 10,
                                                    itemId: 'thisvoucherBox',
                                                    margin: 10,
                                                    fieldLabel: 'Unallocated Voucher Value(=N=)',
                                                    labelWidth: 200,
                                                    name: 'remaining_voucher_value',
                                                    readOnly: true,
                                                    allowBlank: false,
                                                    minValue: 0
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
                            layout: 'fit',
                            items: [
                                {
                                    xtype: 'fieldset',
                                    title: 'Topup Value',
                                    items: [
                                        {
                                            xtype: 'container',
                                            layout: {
                                                type: 'hbox',
                                                align: 'stretch'
                                            },
                                            items: [
                                                {
                                                    xtype: 'numberfield',
                                                    flex: 10,
                                                    itemId: 'thisvoucherBox',
                                                    margin: 10,
                                                    fieldLabel: 'Topup Value (=N=)',
                                                    labelWidth: 200,
                                                    name: 'topup_voucher_value',
                                                    allowBlank: false,
                                                    minValue: 0
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            flex: 0.5,
                            items: [
                                {
                                    xtype: 'container',
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        {
                                            xtype: 'checkboxfield',
                                            flex: 10,
                                            itemId: 'topupvouchertermCheckbox',
                                            name: 'terms_and_conditions',
                                            boxLabel: 'I accept the terms & conditions on voucher operations',
                                            inputValue: '1'
                                        },
                                        {
                                            xtype: 'button',
                                            flex: 1,
                                            disabled: true,
                                            itemId: 'termsBtn',
                                            text: '...'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'hiddenfield',
                    fieldLabel: 'Label',
                    name: 'id'
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'cancelBtn',
                            iconCls: 'cancel',
                            text: 'Cancel'
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
                            disabled: true,
                            itemId: 'topupvoucherBtn',
                            text: 'Topup Voucher'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});