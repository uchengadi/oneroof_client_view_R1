/*
 * File: app/view/HamperCartForm.js
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

Ext.define('Cobuy.view.HamperCartForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.hampercartform',

    requires: [
        'Ext.form.FieldSet',
        'Ext.form.field.Text',
        'Ext.button.Button',
        'Ext.form.field.Checkbox',
        'Ext.toolbar.Toolbar',
        'Ext.toolbar.Separator',
        'Ext.toolbar.Fill',
        'Ext.form.field.Hidden'
    ],

    height: 500,
    width: 500,
    bodyPadding: 10,

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'container',
                    flex: 1,
                    margin: 3,
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'fieldset',
                            title: 'Hamper Label',
                            items: [
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    name: 'hamper_label',
                                    readOnly: true
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    flex: 1,
                    margin: 3,
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'fieldset',
                            title: 'Total number of beneficiary  ',
                            items: [
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    name: 'total_beneficiary_number',
                                    readOnly: true
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    flex: 1,
                    margin: 3,
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'fieldset',
                            title: 'Total number of hampers for delivery',
                            items: [
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    name: 'total_number_of_items_for_delivery',
                                    readOnly: true
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    flex: 1,
                    margin: 3,
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'fieldset',
                            title: 'Cost per hamper (=N=)',
                            items: [
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    name: 'cost_per_hamper',
                                    readOnly: true
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    flex: 1,
                    margin: 3,
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'fieldset',
                            title: 'Average cost of hamper delivery (=N=)',
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
                                            flex: 9,
                                            name: 'average_cost_of_hamper_delivery',
                                            readOnly: true
                                        },
                                        {
                                            xtype: 'button',
                                            flex: 1,
                                            itemId: 'tipsondeliverycostreductionBtn',
                                            margin: '0 0 0 5',
                                            text: 'Tips'
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
                    margin: 3,
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'fieldset',
                            title: 'Total cost of hamper (=N=)',
                            items: [
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    name: 'total_cost_of_hamper',
                                    readOnly: true
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    flex: 1,
                    margin: 3,
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'fieldset',
                            title: 'Total cost of hamper delivery (=N=)',
                            items: [
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    name: 'total_cost_of_delivery',
                                    readOnly: true
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    flex: 1,
                    margin: 3,
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'container',
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'fieldset',
                                    flex: 1,
                                    title: 'Terms & Conditions',
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        {
                                            xtype: 'checkboxfield',
                                            flex: 10,
                                            itemId: 'termsandconditionCheckbox',
                                            name: 'terms_and_conditions',
                                            boxLabel: 'I accept terms & conditions',
                                            inputValue: '1'
                                        },
                                        {
                                            xtype: 'button',
                                            flex: 1,
                                            disabled: true,
                                            itemId: 'termsBtn',
                                            margin: 3,
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
                    flex: 1,
                    fieldLabel: 'Label',
                    name: 'hamper_id'
                },
                {
                    xtype: 'hiddenfield',
                    flex: 1,
                    fieldLabel: 'Label',
                    name: 'cost_per_hamper_for_computation'
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    flex: 1,
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
                            itemId: 'sendhampertocartBtn',
                            text: 'Send hamper to cart'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});