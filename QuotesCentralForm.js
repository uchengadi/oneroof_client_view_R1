/*
 * File: app/view/QuotesCentralForm.js
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

Ext.define('Cobuy.view.QuotesCentralForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.quotescentralform',

    requires: [
        'Ext.form.FieldSet',
        'Ext.grid.Panel',
        'Ext.grid.RowNumberer',
        'Ext.grid.column.Boolean',
        'Ext.grid.column.Date',
        'Ext.grid.View',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.toolbar.Separator'
    ],

    height: 250,
    id: 'quotescentral',
    width: 400,
    layout: 'fit',
    bodyPadding: 10,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'fieldset',
                    title: 'Quotes Central',
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
                            layout: 'fit',
                            title: 'Initiated Quotes Manager',
                            items: [
                                {
                                    xtype: 'gridpanel',
                                    id: 'initiatedquotesgrid',
                                    itemId: 'initiatedquotesgrid',
                                    title: 'List of quotes initiated by me',
                                    store: 'QuotesInitiatedByMember',
                                    columns: [
                                        {
                                            xtype: 'rownumberer',
                                            width: 40,
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
                                            hidden: true,
                                            dataIndex: 'id',
                                            text: 'Id'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            width: 250,
                                            dataIndex: 'quote_number',
                                            text: 'Quote Number'
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
                                            xtype: 'booleancolumn',
                                            width: 150,
                                            dataIndex: 'is_escrowed',
                                            text: 'Is Escrowed?'
                                        },
                                        {
                                            xtype: 'booleancolumn',
                                            width: 150,
                                            dataIndex: 'is_for_future',
                                            text: 'Is for Future?'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            width: 150,
                                            dataIndex: 'minimum_number_of_product_to_buy',
                                            text: 'Minimum Number of Purchase'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            width: 150,
                                            dataIndex: 'whats_product_per_item',
                                            text: 'What is product per Item'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            width: 150,
                                            dataIndex: 'quantity',
                                            text: 'Quantity of Purchase'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            width: 150,
                                            dataIndex: 'total_amount_quoted',
                                            text: 'Total Amount Quoted'
                                        },
                                        {
                                            xtype: 'datecolumn',
                                            width: 150,
                                            dataIndex: 'quote_initiation_date',
                                            text: 'Quote Initiation Date'
                                        },
                                        {
                                            xtype: 'datecolumn',
                                            width: 150,
                                            dataIndex: 'quote_acceptance_date',
                                            text: 'Quote Acceptance Date'
                                        },
                                        {
                                            xtype: 'datecolumn',
                                            width: 150,
                                            dataIndex: 'quote_rejection_date',
                                            text: 'Quote Rejection Date'
                                        },
                                        {
                                            xtype: 'datecolumn',
                                            width: 150,
                                            dataIndex: 'quote_expected_date_of_expiry',
                                            text: 'Quote Expected Expiry Date'
                                        },
                                        {
                                            xtype: 'datecolumn',
                                            width: 150,
                                            dataIndex: 'quote_submission_date_of_expiry',
                                            text: 'Quote Submission Date'
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
                                            width: 150,
                                            dataIndex: 'quote_initiated_by',
                                            text: 'Quote Initiated By'
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
                                            width: 150,
                                            dataIndex: 'quote_submitted_by',
                                            text: 'Quote Submitted By'
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
                                            width: 150,
                                            dataIndex: 'quote_accepted_by',
                                            text: 'Quote Accepted By'
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
                                            width: 150,
                                            dataIndex: 'quote_rejected_by',
                                            text: 'Quote Rejected By'
                                        }
                                    ],
                                    dockedItems: [
                                        {
                                            xtype: 'toolbar',
                                            dock: 'top',
                                            items: [
                                                {
                                                    xtype: 'button',
                                                    disabled: true,
                                                    itemId: 'modifyquoteBtn',
                                                    text: 'Modify Quote'
                                                },
                                                {
                                                    xtype: 'tbseparator'
                                                },
                                                {
                                                    xtype: 'button',
                                                    disabled: true,
                                                    itemId: 'quoteresponsesBtn',
                                                    text: 'View Quote Responses'
                                                },
                                                {
                                                    xtype: 'tbseparator'
                                                },
                                                {
                                                    xtype: 'button',
                                                    disabled: true,
                                                    itemId: 'viewinitiatedacceptedquoteBtn',
                                                    text: 'View Accepted Quote'
                                                },
                                                {
                                                    xtype: 'tbseparator'
                                                },
                                                {
                                                    xtype: 'button',
                                                    disabled: true,
                                                    itemId: 'cancelquoteBtn',
                                                    iconCls: 'delete_1',
                                                    text: 'Cancel Quote'
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
                            hidden: true,
                            margin: '0 0 0 10',
                            autoScroll: true,
                            layout: 'fit',
                            title: 'Received Quotes Manager',
                            items: [
                                {
                                    xtype: 'gridpanel',
                                    id: 'receivedquotegrid',
                                    itemId: 'receivedquotegrid',
                                    title: 'List of quotes received by me',
                                    store: 'QuotesReceivedByMember',
                                    columns: [
                                        {
                                            xtype: 'rownumberer',
                                            width: 40,
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
                                            hidden: true,
                                            dataIndex: 'id',
                                            text: 'Id'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            width: 250,
                                            dataIndex: 'quote_number',
                                            text: 'Quote Number'
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
                                            xtype: 'booleancolumn',
                                            width: 150,
                                            dataIndex: 'is_escrowed',
                                            text: 'Is Escrowed?'
                                        },
                                        {
                                            xtype: 'booleancolumn',
                                            width: 150,
                                            dataIndex: 'is_for_future',
                                            text: 'Is for Future?'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            width: 150,
                                            dataIndex: 'minimum_number_of_product_to_buy',
                                            text: 'Minimum Number of Purchase'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            width: 150,
                                            dataIndex: 'whats_product_per_item',
                                            text: 'What is product per Item'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            width: 150,
                                            dataIndex: 'quantity',
                                            text: 'Quantity of Purchase'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            width: 150,
                                            dataIndex: 'total_amount_quoted',
                                            text: 'Total Amount Quoted'
                                        },
                                        {
                                            xtype: 'datecolumn',
                                            width: 150,
                                            dataIndex: 'quote_initiation_date',
                                            text: 'Quote Initiation Date'
                                        },
                                        {
                                            xtype: 'datecolumn',
                                            width: 150,
                                            dataIndex: 'quote_acceptance_date',
                                            text: 'Quote Acceptance Date'
                                        },
                                        {
                                            xtype: 'datecolumn',
                                            width: 150,
                                            dataIndex: 'quote_rejection_date',
                                            text: 'Quote Rejection Date'
                                        },
                                        {
                                            xtype: 'datecolumn',
                                            width: 150,
                                            dataIndex: 'quote_expected_date_of_expiry',
                                            text: 'Quote Expected Expiry Date'
                                        },
                                        {
                                            xtype: 'datecolumn',
                                            width: 150,
                                            dataIndex: 'quote_submission_date_of_expiry',
                                            text: 'Quote Submission Date'
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
                                            width: 150,
                                            dataIndex: 'quote_initiated_by',
                                            text: 'Quote Initiated By'
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
                                            width: 150,
                                            dataIndex: 'quote_submitted_by',
                                            text: 'Quote Submitted By'
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
                                            width: 150,
                                            dataIndex: 'quote_accepted_by',
                                            text: 'Quote Accepted By'
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
                                            width: 150,
                                            dataIndex: 'quote_rejected_by',
                                            text: 'Quote Rejected By'
                                        }
                                    ],
                                    dockedItems: [
                                        {
                                            xtype: 'toolbar',
                                            dock: 'top',
                                            items: [
                                                {
                                                    xtype: 'button',
                                                    disabled: true,
                                                    itemId: 'viewquoterequestBtn',
                                                    text: 'View Quote Request'
                                                },
                                                {
                                                    xtype: 'tbseparator'
                                                },
                                                {
                                                    xtype: 'button',
                                                    disabled: true,
                                                    itemId: 'viewreceivedacceptedquoteBtn',
                                                    text: 'View Accepted Quote'
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
        });

        me.callParent(arguments);
    }

});