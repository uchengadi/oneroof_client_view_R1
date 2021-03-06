/*
 * File: app/view/HamperProductConstituents.js
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

Ext.define('Cobuy.view.HamperProductConstituents', {
    extend: 'Ext.form.Panel',
    alias: 'widget.hamperproductconstituents',

    requires: [
        'Ext.form.FieldSet',
        'Ext.form.field.Display',
        'Ext.view.View',
        'Ext.XTemplate',
        'Ext.button.Button',
        'Ext.form.field.Number',
        'Ext.form.field.Date',
        'Ext.form.Panel',
        'Ext.form.field.Hidden'
    ],

    height: 500,
    itemId: 'productdetailsform',
    width: 1000,

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'container',
                    flex: 2,
                    margin: 10,
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'container',
                            flex: 9,
                            margin: 5,
                            layout: 'fit',
                            items: [
                                {
                                    xtype: 'fieldset',
                                    title: 'Product General Information',
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
                                                    margin: 5,
                                                    title: 'Product Name',
                                                    items: [
                                                        {
                                                            xtype: 'displayfield',
                                                            anchor: '100%',
                                                            name: 'name'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            flex: 1,
                                            layout: 'fit',
                                            items: [
                                                {
                                                    xtype: 'fieldset',
                                                    margin: 5,
                                                    title: 'Product Brand',
                                                    items: [
                                                        {
                                                            xtype: 'displayfield',
                                                            anchor: '100%',
                                                            name: 'brand'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            flex: 1,
                                            layout: 'fit',
                                            items: [
                                                {
                                                    xtype: 'fieldset',
                                                    margin: 5,
                                                    title: 'Product Maker',
                                                    items: [
                                                        {
                                                            xtype: 'displayfield',
                                                            anchor: '100%',
                                                            name: 'maker'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            flex: 1,
                                            layout: 'fit',
                                            items: [
                                                {
                                                    xtype: 'fieldset',
                                                    margin: 5,
                                                    title: 'Product Origin/Made In',
                                                    items: [
                                                        {
                                                            xtype: 'displayfield',
                                                            anchor: '100%',
                                                            name: 'origin'
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
                            xtype: 'fieldset',
                            flex: 10,
                            margin: 5,
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
                                    cls: 'my-dataview-cls',
                                    itemId: 'productDataview',
                                    margin: '0 0 10 0',
                                    itemTpl: [
                                        '<tpl for=".">',
                                        '    <div style="float:left;padding:30px 30px 30px 100px;  "class=thumb-wrap id="id">',
                                        '        <div class=thumb><img src="../admin.oneroof.com.ng/cobuy_images/icons/{icon}"  height="140" width="80"></div>',
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
                                    store: 'SingleProductConstituent'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            flex: 1,
                            layout: {
                                type: 'hbox',
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
                                    layout: 'fit',
                                    items: [
                                        {
                                            xtype: 'button',
                                            itemId: 'viewconstituentimagesBtn',
                                            text: 'View more product images'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    flex: 1
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    flex: 3,
                    margin: 10,
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'fieldset',
                            flex: 10,
                            itemId: 'priceInfoContainer',
                            margin: 5,
                            title: 'Product Pricing Information',
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    margin: 5,
                                    layout: 'fit',
                                    items: [
                                        {
                                            xtype: 'fieldset',
                                            margin: 5,
                                            title: 'What represents an item for this product',
                                            items: [
                                                {
                                                    xtype: 'displayfield',
                                                    anchor: '100%',
                                                    labelWidth: 200,
                                                    name: 'whats_product_per_item'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    itemId: 'maxQuantity',
                                    margin: 5,
                                    layout: 'fit',
                                    items: [
                                        {
                                            xtype: 'fieldset',
                                            margin: 5,
                                            title: 'Maximum Quantity of Items in Stock',
                                            items: [
                                                {
                                                    xtype: 'displayfield',
                                                    anchor: '100%',
                                                    labelWidth: 200,
                                                    name: 'quantity'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    hidden: true,
                                    itemId: 'remainItem',
                                    margin: 5,
                                    layout: 'fit',
                                    items: [
                                        {
                                            xtype: 'fieldset',
                                            margin: 5,
                                            title: 'Remaining Quantity of Items in Stock',
                                            items: [
                                                {
                                                    xtype: 'displayfield',
                                                    anchor: '100%',
                                                    labelWidth: 200,
                                                    name: 'remaining_quantity_on_sale'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    itemId: 'minNumberOfPurchase',
                                    margin: 5,
                                    layout: 'fit',
                                    items: [
                                        {
                                            xtype: 'fieldset',
                                            margin: 5,
                                            title: 'Minimum number  of Items for every purchase',
                                            items: [
                                                {
                                                    xtype: 'displayfield',
                                                    anchor: '100%',
                                                    itemId: 'minNumberOfValue',
                                                    labelWidth: 200,
                                                    name: 'minimum_number_of_product_to_buy'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    flex: 1.1,
                                    itemId: 'productSellingPricePerItemContainer',
                                    margin: 5,
                                    layout: 'fit',
                                    items: [
                                        {
                                            xtype: 'fieldset',
                                            itemId: 'prevailingRetailSellingFieldset',
                                            margin: 5,
                                            title: 'Product Selling Price per item(=N=)',
                                            items: [
                                                {
                                                    xtype: 'displayfield',
                                                    anchor: '100%',
                                                    labelWidth: 200,
                                                    name: 'prevailing_retail_selling_price_for_display'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    flex: 1.1,
                                    hidden: true,
                                    margin: 5,
                                    layout: 'fit',
                                    items: [
                                        {
                                            xtype: 'fieldset',
                                            itemId: 'cobuyMemberPriceFieldset',
                                            margin: 5,
                                            title: 'Cobuy Member Selling Price per item(=N=)',
                                            items: [
                                                {
                                                    xtype: 'displayfield',
                                                    anchor: '100%',
                                                    labelWidth: 200,
                                                    name: 'per_portion_price_for_display'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    flex: 1.1,
                                    itemId: 'currentQuantityInThePack',
                                    margin: 5,
                                    layout: 'fit',
                                    items: [
                                        {
                                            xtype: 'fieldset',
                                            itemId: 'quantityPurchasedFieldset',
                                            margin: 5,
                                            title: 'What quantity do you want?',
                                            items: [
                                                {
                                                    xtype: 'numberfield',
                                                    anchor: '100%',
                                                    itemId: 'quantityOfInThePack',
                                                    labelWidth: 200,
                                                    name: 'quantity_of_product_in_the_pack',
                                                    allowBlank: false,
                                                    minValue: 1
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    flex: 1.1,
                                    hidden: true,
                                    itemId: 'quantityOfProductInThePackContainer',
                                    margin: 5,
                                    layout: 'fit',
                                    items: [
                                        {
                                            xtype: 'fieldset',
                                            margin: 5,
                                            title: 'Quantity of product in this pack',
                                            items: [
                                                {
                                                    xtype: 'numberfield',
                                                    anchor: '100%',
                                                    itemId: 'quantityOfProductInThePack',
                                                    labelWidth: 200,
                                                    name: 'quantity_of_product_in_the_pack_for_hamper',
                                                    allowBlank: false,
                                                    minValue: 1
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    flex: 1.2,
                                    hidden: true,
                                    itemId: 'priceValidityPeriod',
                                    margin: 5,
                                    layout: 'fit',
                                    items: [
                                        {
                                            xtype: 'fieldset',
                                            layout: 'column',
                                            title: 'Cobuy Member Price Validity Period',
                                            items: [
                                                {
                                                    xtype: 'datefield',
                                                    itemId: 'startValidity',
                                                    fieldLabel: 'Start',
                                                    labelWidth: 30,
                                                    name: 'start_price_validity_period',
                                                    format: 'd/m/Y',
                                                    submitFormat: 'm/d/Y'
                                                },
                                                {
                                                    xtype: 'datefield',
                                                    itemId: 'endValidity',
                                                    margin: '0 0 0 20',
                                                    fieldLabel: 'End',
                                                    labelWidth: 30,
                                                    name: 'end_price_validity_period',
                                                    format: 'd/m/Y',
                                                    submitFormat: 'm/d/Y'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    flex: 1.3,
                                    itemId: 'productAmountContainer',
                                    margin: 5,
                                    layout: 'fit',
                                    items: [
                                        {
                                            xtype: 'fieldset',
                                            itemId: 'amountPaidForProductFieldset',
                                            margin: 5,
                                            title: 'Amount to be paid for this Product(=N=)',
                                            items: [
                                                {
                                                    xtype: 'displayfield',
                                                    anchor: '100%',
                                                    margin: 3,
                                                    labelWidth: 200,
                                                    name: 'amount_to_be_paid_for_display'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    flex: 1.2,
                                    hidden: true,
                                    margin: 5,
                                    layout: 'fit',
                                    items: [
                                        {
                                            xtype: 'fieldset',
                                            itemId: 'amountSavedForThisPurchaseFieldset',
                                            margin: 5,
                                            title: 'Total Amount Saved on Purchase by Members(=N=)',
                                            items: [
                                                {
                                                    xtype: 'displayfield',
                                                    anchor: '100%',
                                                    margin: 3,
                                                    labelWidth: 200,
                                                    name: 'amount_save_on_purchase_for_display'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: 'form',
                                    bodyPadding: 10,
                                    items: [
                                        {
                                            xtype: 'hiddenfield',
                                            anchor: '100%',
                                            fieldLabel: 'Label',
                                            name: 'category_id'
                                        },
                                        {
                                            xtype: 'hiddenfield',
                                            anchor: '100%',
                                            fieldLabel: 'Label',
                                            name: 'product_id'
                                        },
                                        {
                                            xtype: 'hiddenfield',
                                            anchor: '100%',
                                            fieldLabel: 'Label',
                                            name: 'service_id'
                                        },
                                        {
                                            xtype: 'hiddenfield',
                                            anchor: '100%',
                                            fieldLabel: 'Label',
                                            name: 'type_id'
                                        },
                                        {
                                            xtype: 'hiddenfield',
                                            anchor: '100%',
                                            fieldLabel: 'Label',
                                            name: 'id'
                                        },
                                        {
                                            xtype: 'hiddenfield',
                                            anchor: '100%',
                                            fieldLabel: 'Label',
                                            name: 'operation'
                                        },
                                        {
                                            xtype: 'hiddenfield',
                                            anchor: '100%',
                                            fieldLabel: 'Label',
                                            name: 'operation_detail'
                                        },
                                        {
                                            xtype: 'hiddenfield',
                                            anchor: '100%',
                                            fieldLabel: 'Label',
                                            name: 'member'
                                        },
                                        {
                                            xtype: 'hiddenfield',
                                            anchor: '100%',
                                            fieldLabel: 'Label',
                                            name: 'history'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            anchor: '100%',
                                            hidden: true,
                                            itemId: 'prevailingRetailPrice',
                                            fieldLabel: 'Label',
                                            name: 'prevailing_retail_selling_price'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            anchor: '100%',
                                            hidden: true,
                                            itemId: 'cobuyMemberPrice',
                                            fieldLabel: 'Label',
                                            name: 'per_portion_price'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            anchor: '100%',
                                            hidden: true,
                                            fieldLabel: 'Label',
                                            name: 'amount_to_be_paid'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            anchor: '100%',
                                            hidden: true,
                                            fieldLabel: 'Label',
                                            name: 'amount_save_on_purchase'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            flex: 10,
                            hidden: true,
                            itemId: 'productFeature',
                            margin: 3,
                            title: 'Product Feature',
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'displayfield',
                                    flex: 1,
                                    name: 'feature',
                                    value: 'Display Field'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            flex: 0.5,
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'container',
                                    flex: 1
                                },
                                {
                                    xtype: 'container',
                                    flex: 1.7,
                                    layout: 'fit',
                                    items: [
                                        {
                                            xtype: 'button',
                                            itemId: 'knowmoreaboutconstituentBtn',
                                            text: 'know more about this product'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    flex: 1
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    flex: 1.8,
                    itemId: 'productDescriptionContainer',
                    margin: 10,
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'fieldset',
                            margin: 5,
                            layout: 'fit',
                            title: 'Product Description',
                            items: [
                                {
                                    xtype: 'displayfield',
                                    name: 'description',
                                    value: 'Display Field'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    flex: 1,
                    hidden: true,
                    margin: 10,
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'fieldset',
                            margin: 5,
                            layout: 'fit',
                            title: 'Product Features',
                            items: [
                                {
                                    xtype: 'displayfield',
                                    name: 'feature',
                                    value: 'Display Field'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    flex: 1,
                    hidden: true,
                    margin: 10,
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'fieldset',
                            margin: 5,
                            layout: 'fit',
                            title: 'Product Specifications',
                            items: [
                                {
                                    xtype: 'displayfield',
                                    name: 'specifications',
                                    value: 'Display Field'
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