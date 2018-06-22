/*
 * File: app/view/CentralPanel.js
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

Ext.define('Cobuy.view.CentralPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.centralpanel',

    requires: [
        'Cobuy.view.ProductsDataview',
        'Ext.form.FieldSet',
        'Ext.Img',
        'Ext.form.Label',
        'Ext.panel.Panel'
    ],

    height: 250,
    width: 400,
    overflowY: 'auto',

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'fieldset',
                    flex: 2,
                    hidden: true,
                    title: 'Services',
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
                            flex: 2,
                            margin: '3 0 0 0',
                            layout: 'fit',
                            items: [
                                {
                                    xtype: 'fieldset',
                                    title: 'General Service',
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        {
                                            xtype: 'image',
                                            flex: 3,
                                            itemId: 'generalserviceImg'
                                        },
                                        {
                                            xtype: 'label',
                                            flex: 1,
                                            text: 'My Label'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            flex: 2,
                            margin: '3 0 0 0',
                            layout: 'fit',
                            items: [
                                {
                                    xtype: 'fieldset',
                                    title: 'Share Services',
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        {
                                            xtype: 'image',
                                            flex: 3,
                                            itemId: 'shateserviceImg'
                                        },
                                        {
                                            xtype: 'label',
                                            flex: 1,
                                            text: 'My Label'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            flex: 2,
                            margin: '3 0 0 0',
                            layout: 'fit',
                            items: [
                                {
                                    xtype: 'fieldset',
                                    title: 'Business Services',
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        {
                                            xtype: 'image',
                                            flex: 3,
                                            height: 201,
                                            itemId: 'businessserviceImg',
                                            width: 201
                                        },
                                        {
                                            xtype: 'label',
                                            flex: 1,
                                            text: 'My Label'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            flex: 1,
                            margin: '3 0 0 0'
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    flex: 10,
                    hidden: true,
                    margin: '0 0 0 10',
                    layout: 'fit',
                    title: 'Products'
                },
                {
                    xtype: 'productsdataview',
                    flex: 1
                }
            ]
        });

        me.callParent(arguments);
    }

});