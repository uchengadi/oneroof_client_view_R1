/*
 * File: app/view/FuturesCentralForm.js
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

Ext.define('Cobuy.view.FuturesCentralForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.futurescentralform',

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
    id: 'futurescentral',
    width: 400,
    layout: 'fit',
    bodyPadding: 10,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'fieldset',
                    title: 'Futures Central',
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
                            title: 'Initiated Futures Manager',
                            items: [
                                {
                                    xtype: 'gridpanel',
                                    id: 'initiatedfuturesgrid',
                                    itemId: 'initiatedfuturesgrid',
                                    title: 'List of futures request initiated by me',
                                    store: 'FuturesInitiatedByMember',
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
                                            width: 250,
                                            dataIndex: 'future_number',
                                            text: 'Futures Number'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                                var quoteStore = Ext.getStore('Quotes');
                                                var quote = quoteStore.findRecord('id', value);
                                                return quote!== null ? quote.get('quote_number'): value;
                                            },
                                            width: 250,
                                            dataIndex: 'quote_id',
                                            text: 'Quote Number'
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
                                            dataIndex: 'is_quoted',
                                            text: 'Is Quoted?'
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
                                            dataIndex: 'total_amount_of_purchase',
                                            text: 'Total Amount of Purchase'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            width: 150,
                                            dataIndex: 'delivery_month',
                                            text: 'Month of Delivery'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            width: 150,
                                            dataIndex: 'delivery_year',
                                            text: 'Year of Delivery'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            width: 150,
                                            dataIndex: 'payment_method',
                                            text: 'Payment Method'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            width: 150,
                                            dataIndex: 'staggered_payment_frequency',
                                            text: 'Staggered Payment Frequency'
                                        },
                                        {
                                            xtype: 'datecolumn',
                                            width: 150,
                                            dataIndex: 'futures_initiation_date',
                                            text: 'Futures Initiation Date'
                                        },
                                        {
                                            xtype: 'datecolumn',
                                            width: 150,
                                            dataIndex: 'futures_acceptance_date',
                                            text: 'Futures Acceptance Date'
                                        },
                                        {
                                            xtype: 'datecolumn',
                                            width: 150,
                                            dataIndex: 'futures_rejection_date',
                                            text: 'Futures Rejection Date'
                                        },
                                        {
                                            xtype: 'datecolumn',
                                            width: 150,
                                            dataIndex: 'futures_expected_date_of_expiry',
                                            text: 'Futures Expected Expiry Date'
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
                                            dataIndex: 'futures_initiated_by',
                                            text: 'Futures Initiated By'
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
                                            dataIndex: 'futures_requested_by',
                                            text: 'Futures Submitted By'
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
                                            dataIndex: 'futures_accepted_by',
                                            text: 'Futures Accepted By'
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
                                            dataIndex: 'futures_rejected_by',
                                            text: 'Futures Rejected By'
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
                                                    itemId: 'modifyfuturesBtn',
                                                    text: 'Modify Futures Request'
                                                },
                                                {
                                                    xtype: 'tbseparator'
                                                },
                                                {
                                                    xtype: 'button',
                                                    disabled: true,
                                                    itemId: 'cancelfuturesrequestBtn',
                                                    iconCls: 'delete_1',
                                                    text: 'Cancel Futures Request'
                                                },
                                                {
                                                    xtype: 'tbseparator'
                                                },
                                                {
                                                    xtype: 'button',
                                                    itemId: 'viewthisinitiatedfuturesBtn',
                                                    iconCls: 'delete_1',
                                                    text: 'View Future'
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
                            title: 'Received Futures Manager',
                            items: [
                                {
                                    xtype: 'fieldset',
                                    margin: '0 0 0 10',
                                    autoScroll: true,
                                    layout: 'fit',
                                    title: 'Received Futures Manager',
                                    items: [
                                        {
                                            xtype: 'gridpanel',
                                            id: 'receivedfuturesgrid',
                                            itemId: 'receivedfuturesgrid',
                                            title: 'List of futures request received by me',
                                            store: 'FuturesInitiatedByMember',
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
                                                    width: 250,
                                                    dataIndex: 'future_number',
                                                    text: 'Futures Number'
                                                },
                                                {
                                                    xtype: 'gridcolumn',
                                                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                                        var quoteStore = Ext.getStore('Quotes');
                                                        var quote = quoteStore.findRecord('id', value);
                                                        return quote!== null ? quote.get('quote_number'): value;
                                                    },
                                                    width: 250,
                                                    dataIndex: 'quote_id',
                                                    text: 'Quote Number'
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
                                                    dataIndex: 'is_quoted',
                                                    text: 'Is Quoted?'
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
                                                    dataIndex: 'total_amount_of_purchase',
                                                    text: 'Total Amount of Purchase'
                                                },
                                                {
                                                    xtype: 'gridcolumn',
                                                    width: 150,
                                                    dataIndex: 'delivery_month',
                                                    text: 'Month of Delivery'
                                                },
                                                {
                                                    xtype: 'gridcolumn',
                                                    width: 150,
                                                    dataIndex: 'delivery_year',
                                                    text: 'Year of Delivery'
                                                },
                                                {
                                                    xtype: 'gridcolumn',
                                                    width: 150,
                                                    dataIndex: 'payment_method',
                                                    text: 'Payment Method'
                                                },
                                                {
                                                    xtype: 'gridcolumn',
                                                    width: 150,
                                                    dataIndex: 'staggered_payment_frequency',
                                                    text: 'Staggered Payment Frequency'
                                                },
                                                {
                                                    xtype: 'datecolumn',
                                                    width: 150,
                                                    dataIndex: 'futures_initiation_date',
                                                    text: 'Futures Initiation Date'
                                                },
                                                {
                                                    xtype: 'datecolumn',
                                                    width: 150,
                                                    dataIndex: 'futures_acceptance_date',
                                                    text: 'Futures Acceptance Date'
                                                },
                                                {
                                                    xtype: 'datecolumn',
                                                    width: 150,
                                                    dataIndex: 'futures_rejection_date',
                                                    text: 'Futures Rejection Date'
                                                },
                                                {
                                                    xtype: 'datecolumn',
                                                    width: 150,
                                                    dataIndex: 'futures_expected_date_of_expiry',
                                                    text: 'Futures Expected Expiry Date'
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
                                                    dataIndex: 'futures_initiated_by',
                                                    text: 'Futures Initiated By'
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
                                                    dataIndex: 'futures_requested_by',
                                                    text: 'Futures Submitted By'
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
                                                    dataIndex: 'futures_accepted_by',
                                                    text: 'Futures Accepted By'
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
                                                    dataIndex: 'futures_rejected_by',
                                                    text: 'Futures Rejected By'
                                                }
                                            ],
                                            dockedItems: [
                                                {
                                                    xtype: 'toolbar',
                                                    dock: 'top',
                                                    items: [
                                                        {
                                                            xtype: 'button',
                                                            itemId: 'viewthisfuturesBtn',
                                                            text: 'View Futures'
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
                }
            ]
        });

        me.callParent(arguments);
    }

});