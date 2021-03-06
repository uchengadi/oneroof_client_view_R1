/*
 * File: app/view/ConnectingToAMemberForm.js
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

Ext.define('Cobuy.view.ConnectingToAMemberForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.connectingtoamemberform',

    requires: [
        'Ext.form.FieldSet',
        'Ext.form.field.ComboBox',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.toolbar.Separator',
        'Ext.toolbar.Fill'
    ],

    layout: 'fit',
    bodyPadding: 10,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'fieldset',
                    title: 'Connecting to a Member',
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
                                    title: 'Other Member Details & Relationship',
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            fieldLabel: 'Membership Number',
                                            labelWidth: 150,
                                            name: 'membership_number',
                                            readOnly: true,
                                            allowBlank: false
                                        },
                                        {
                                            xtype: 'combobox',
                                            anchor: '100%',
                                            fieldLabel: 'Relationship',
                                            labelWidth: 150,
                                            name: 'relationship',
                                            allowBlank: false,
                                            editable: false,
                                            displayField: 'relationship',
                                            store: 'MemberRelationship',
                                            valueField: 'relationship'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
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
                            itemId: 'connectBtn',
                            text: 'Connect'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});