/*
 * File: app/view/AddingANonMemberBeneficiaryForm.js
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

Ext.define('Cobuy.view.AddingANonMemberBeneficiaryForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.addinganonmemberbeneficiaryform',

    requires: [
        'Ext.form.FieldSet',
        'Ext.form.field.Number',
        'Ext.form.field.Radio',
        'Ext.form.field.ComboBox',
        'Ext.button.Button',
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
                    flex: 0.3,
                    margin: 3,
                    layout: 'anchor',
                    items: [
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'Hamper & Gift Label',
                            labelWidth: 130,
                            name: 'hamper_label',
                            allowBlank: false
                        }
                    ]
                },
                {
                    xtype: 'container',
                    flex: 1.2,
                    margin: 3,
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'fieldset',
                            title: 'Non Member as Hamper Beneficiary',
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    margin: 10,
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            flex: 10,
                                            fieldLabel: 'Beneficiary Name',
                                            labelWidth: 170,
                                            name: 'non_member_beneficiary',
                                            allowBlank: false
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    margin: 10,
                                    layout: 'anchor',
                                    items: [
                                        {
                                            xtype: 'numberfield',
                                            anchor: '100%',
                                            fieldLabel: 'How many hampers & gift?',
                                            labelWidth: 170,
                                            name: 'number_of_hampers_delivered',
                                            allowBlank: false,
                                            minValue: 1
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    flex: 2.5,
                    margin: 3,
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'container',
                            flex: 1,
                            disabled: true,
                            items: [
                                {
                                    xtype: 'fieldset',
                                    title: 'Deliver to the receiver\'s registered primary address',
                                    items: [
                                        {
                                            xtype: 'radiofield',
                                            itemId: 'registeredAddressRadio',
                                            name: 'delivery_address_option',
                                            boxLabel: 'Deliver the hamper & gift  to the receiver\'s registered primary address location'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            flex: 3.5,
                            margin: '10 0 0 0',
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'fieldset',
                                    flex: 1,
                                    title: '',
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        {
                                            xtype: 'container',
                                            flex: 1,
                                            items: [
                                                {
                                                    xtype: 'radiofield',
                                                    itemId: 'nonRegisteredAddressRadio',
                                                    name: 'delivery_address_option',
                                                    boxLabel: 'Deliver the hamper & gift to this address location',
                                                    checked: true,
                                                    inputValue: 'others'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            flex: 5,
                                            itemId: 'deliveryaddresscontainer',
                                            layout: {
                                                type: 'vbox',
                                                align: 'stretch'
                                            },
                                            items: [
                                                {
                                                    xtype: 'container',
                                                    flex: 1,
                                                    layout: 'anchor',
                                                    items: [
                                                        {
                                                            xtype: 'combobox',
                                                            anchor: '100%',
                                                            itemId: 'primaryCountryCombo',
                                                            fieldLabel: 'Country',
                                                            name: 'country',
                                                            allowBlank: false,
                                                            editable: false,
                                                            displayField: 'name',
                                                            store: 'Countries',
                                                            valueField: 'id'
                                                        }
                                                    ]
                                                },
                                                {
                                                    xtype: 'container',
                                                    flex: 1,
                                                    layout: 'anchor',
                                                    items: [
                                                        {
                                                            xtype: 'combobox',
                                                            anchor: '100%',
                                                            itemId: 'primaryStateCombo',
                                                            fieldLabel: 'State/Region',
                                                            name: 'state',
                                                            allowBlank: false,
                                                            editable: false,
                                                            displayField: 'name',
                                                            queryMode: 'local',
                                                            store: 'StatesInACountry',
                                                            valueField: 'id'
                                                        }
                                                    ]
                                                },
                                                {
                                                    xtype: 'container',
                                                    flex: 1,
                                                    layout: 'anchor',
                                                    items: [
                                                        {
                                                            xtype: 'combobox',
                                                            anchor: '100%',
                                                            itemId: 'primaryCityCombo',
                                                            fieldLabel: 'City/County',
                                                            name: 'city',
                                                            allowBlank: false,
                                                            editable: false,
                                                            displayField: 'name',
                                                            queryMode: 'local',
                                                            store: 'CitiesInAState',
                                                            valueField: 'id'
                                                        }
                                                    ]
                                                },
                                                {
                                                    xtype: 'container',
                                                    flex: 1,
                                                    layout: 'anchor',
                                                    items: [
                                                        {
                                                            xtype: 'textfield',
                                                            anchor: '100%',
                                                            fieldLabel: 'Address',
                                                            name: 'address',
                                                            allowBlank: false
                                                        }
                                                    ]
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
                    flex: 0.7,
                    margin: 3,
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'fieldset',
                            margin: 5,
                            title: 'Select the preferred hamper container for this beneficiary',
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
                                            flex: 5,
                                            itemId: 'hampercontainerCombo',
                                            margin: 5,
                                            fieldLabel: 'Hamper Container',
                                            labelWidth: 120,
                                            name: 'hamper_container_id',
                                            editable: false,
                                            displayField: 'name',
                                            store: 'AllHamperContainers',
                                            valueField: 'id'
                                        },
                                        {
                                            xtype: 'button',
                                            flex: 1,
                                            itemId: 'previewcontainerBtn',
                                            margin: 5,
                                            iconCls: 'preview',
                                            text: 'View'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    flex: 0.7,
                    margin: 3,
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'fieldset',
                            margin: 5,
                            title: 'Select the preferred hamper delivery type for this beneficiary',
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
                                            flex: 5,
                                            itemId: 'deliverytypeCombo',
                                            margin: 5,
                                            fieldLabel: 'Delivery Type',
                                            labelWidth: 120,
                                            name: 'delivery_type',
                                            editable: false,
                                            displayField: 'delivery_name',
                                            store: 'DeliveryType',
                                            valueField: 'delivery_type'
                                        },
                                        {
                                            xtype: 'button',
                                            flex: 1,
                                            itemId: 'deliverytypeBtn',
                                            margin: 5,
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
                    name: 'beneficiary_id'
                },
                {
                    xtype: 'hiddenfield',
                    flex: 1,
                    fieldLabel: 'Label',
                    name: 'operation'
                },
                {
                    xtype: 'hiddenfield',
                    flex: 1,
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
                            itemId: 'addnonmemberbeneficiaryBtn',
                            iconCls: 'add',
                            text: 'Add Beneficiary'
                        },
                        {
                            xtype: 'button',
                            hidden: true,
                            itemId: 'editnonmemberbeneficiaryBtn',
                            iconCls: 'edit',
                            text: 'Edit Beneficiary'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});