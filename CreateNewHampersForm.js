/*
 * File: app/view/CreateNewHampersForm.js
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

Ext.define('Cobuy.view.CreateNewHampersForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.createnewhampersform',

    requires: [
        'Ext.form.FieldSet',
        'Ext.form.field.Number',
        'Ext.form.field.HtmlEditor',
        'Ext.form.field.File',
        'Ext.button.Button',
        'Ext.form.field.Hidden'
    ],

    height: 300,
    width: 400,
    layout: 'fit',
    bodyPadding: 10,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'fieldset',
                    title: 'Hamper & Gift Details ',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'container',
                            flex: 1,
                            margin: 10,
                            layout: 'anchor',
                            items: [
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: 'Hamper\'s Label',
                                    labelWidth: 170,
                                    name: 'name',
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
                                    fieldLabel: 'Hamper\'s Cost Limit (=N=)',
                                    labelWidth: 170,
                                    name: 'hamper_cost_limit',
                                    allowBlank: false,
                                    minValue: 0
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            flex: 6,
                            margin: 10,
                            layout: 'fit',
                            items: [
                                {
                                    xtype: 'htmleditor',
                                    height: 150,
                                    fieldLabel: 'Description',
                                    name: 'description'
                                }
                            ]
                        },
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
                                    xtype: 'filefield',
                                    flex: 8,
                                    fieldLabel: 'Hamper\'s Icon (in .png/jpg)',
                                    labelWidth: 180,
                                    name: 'icon',
                                    buttonOnly: true
                                },
                                {
                                    xtype: 'button',
                                    flex: 1,
                                    hidden: true,
                                    itemId: 'viewBtn',
                                    margin: '',
                                    text: 'View'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'hiddenfield',
                    fieldLabel: 'Label',
                    name: 'operation'
                },
                {
                    xtype: 'hiddenfield',
                    fieldLabel: 'Label',
                    name: 'id'
                }
            ]
        });

        me.callParent(arguments);
    }

});