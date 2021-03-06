/*
 * File: app/view/HamperConnectedMemberBeneficiaryGrid.js
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

Ext.define('Cobuy.view.HamperConnectedMemberBeneficiaryGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.hamperconnectedmemberbeneficiarygrid',

    requires: [
        'Ext.grid.RowNumberer',
        'Ext.grid.View',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.toolbar.Separator'
    ],

    height: 244,
    itemId: 'hamperconnectedmemberbeneficiarygrid',
    width: 400,
    store: 'HampersForConnectedMembers',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'rownumberer',
                    width: 40,
                    dataIndex: 'string',
                    text: 'S/n'
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
                    width: 300,
                    dataIndex: 'beneficiary_id',
                    text: 'Beneficiary'
                },
                {
                    xtype: 'gridcolumn',
                    width: 200,
                    dataIndex: 'status',
                    text: 'Delivery Status'
                },
                {
                    xtype: 'gridcolumn',
                    width: 300,
                    dataIndex: 'number_of_hampers_delivered',
                    text: 'Number of Hampers & Gift for delivery'
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'addconnectedmemberBtn',
                            iconCls: 'add',
                            text: 'Add'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            itemId: 'editconnectedmemberBtn',
                            iconCls: 'edit',
                            text: 'Edit'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            itemId: 'deleteconnectedmemberBtn',
                            iconCls: 'delete_1',
                            text: 'Remove'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            itemId: 'connectedmemberdeliveryreportBtn',
                            iconCls: 'refresh',
                            text: 'Delivery Report'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});