/*
 * File: app/view/RestoreConstituentProductForm.js
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

Ext.define('Cobuy.view.RestoreConstituentProductForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.restoreconstituentproductform',

    requires: [
        'Ext.form.FieldSet',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Hidden',
        'Ext.view.View',
        'Ext.XTemplate'
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
            items: [
                {
                    xtype: 'container',
                    flex: 1,
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'fieldset',
                            title: 'Select the Product Constituent to Restore',
                            items: [
                                {
                                    xtype: 'combobox',
                                    anchor: '100%',
                                    itemId: 'constituentCombo',
                                    name: 'constituent',
                                    editable: false,
                                    displayField: 'name',
                                    store: 'AllRemovedProductConstituentByMember',
                                    valueField: 'id'
                                },
                                {
                                    xtype: 'hiddenfield',
                                    anchor: '100%',
                                    fieldLabel: 'Label',
                                    name: 'product_id'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    flex: 5,
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'fieldset',
                            layout: 'fit',
                            title: 'Product Image',
                            items: [
                                {
                                    xtype: 'dataview',
                                    prepareData: function(data) {
                                        //get the exchange rate form from the store mainpanel

                                        //var form = Ext.getCmp('storewin').down('#rateform');

                                        //var rate = form.down('hiddenfield[name=rate]').getValue();

                                        //var currency_code = form.down('hiddenfield[name=code]').getValue();

                                        //var converted_value = rate* data.price;
                                        Ext.apply(data, {
                                            //shortDesc: Ext.util.Format.ellipsis(data.description, 20),
                                            shortName: Ext.util.Format.ellipsis(data.name, 30)
                                            // price: Ext.util.Format.currency(converted_value,currency_code,2),
                                            //min_subs_no: Ext.util.Format.number(data.min_subscription_required, '0,000,000'),
                                            //visibility: Ext.util.Format.ellipsis(data.visibility, 15),
                                            //location: Ext.util.Format.ellipsis(data.storage_location, 15)
                                        });
                                        return data;
                                    },
                                    itemId: 'thisDataview',
                                    margin: 10,
                                    itemTpl: [
                                        '<tpl for=".">',
                                        '    <div style="float:left;padding:30px 30px 30px 15px;  "class=thumb-wrap id="id">',
                                        '        <div class=thumb><img src="../admin.oneroof.com.ng/cobuy_images/icons/{icon}"  height="280" width="280"></div>',
                                        '        <div>',
                                        '         <!-- <b>{shortName} </b></br> -->',
                                        '            ',
                                        '        <!--<spam>{description} </spam> -->',
                                        '        <!--  <span style=class=x-editable>{shortDesc}</span>-->',
                                        '        <!--<span style="padding-right:5px">price/user/yr:</span><span style=class=x-editable>{price}</span>-->',
                                        '        <!--<span style="padding-right:5px">visibility:</span><span style=class=x-editable>{visibility}</span>',
                                        '        <!--<span style="padding-right:5px">location:</span><span style=class=x-editable>{location}</span>-->',
                                        '        <!--<br>min subscription no.:<span style="padding-left:5px">{min_subs_no}</span></br>-->',
                                        '        </div>',
                                        '        ',
                                        '    </tpl>',
                                        '<div class=x-clear></div>'
                                    ],
                                    store: 'RestoreSingleProductConstituent'
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