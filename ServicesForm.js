/*
 * File: app/view/ServicesForm.js
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

Ext.define('Cobuy.view.ServicesForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.servicesform',

    requires: [
        'Ext.toolbar.Toolbar',
        'Ext.toolbar.Fill',
        'Ext.button.Button',
        'Ext.form.FieldSet',
        'Ext.form.field.Display'
    ],

    height: 250,
    width: 400,
    bodyPadding: 10,

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
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
            ],
            items: [
                {
                    xtype: 'container',
                    flex: 1,
                    margin: 5,
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'fieldset',
                            autoScroll: true,
                            layout: 'fit',
                            title: 'Services',
                            items: [
                                {
                                    xtype: 'displayfield',
                                    name: 'introduction'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    flex: 4,
                    margin: 5,
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'fieldset',
                            flex: 1,
                            margin: 5,
                            autoScroll: true,
                            layout: 'fit',
                            title: 'Oneroof Services',
                            items: [
                                {
                                    xtype: 'displayfield',
                                    margin: 10,
                                    name: 'service_general'
                                }
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            flex: 1,
                            margin: 5,
                            autoScroll: true,
                            layout: 'fit',
                            title: 'Oneroof Services cont\'d',
                            items: [
                                {
                                    xtype: 'displayfield',
                                    name: 'service_share'
                                }
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            flex: 1,
                            hidden: true,
                            margin: 5,
                            autoScroll: true,
                            layout: 'fit',
                            title: 'Oneroof Hampers',
                            items: [
                                {
                                    xtype: 'displayfield',
                                    name: 'service_hampers'
                                }
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            flex: 1,
                            hidden: true,
                            margin: 5,
                            autoScroll: true,
                            layout: 'fit',
                            title: 'Oneroof Escrow',
                            items: [
                                {
                                    xtype: 'displayfield',
                                    name: 'service_escrow'
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