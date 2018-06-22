/*
 * File: app/view/PaymentRenewalForm.js
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

Ext.define('Cobuy.view.PaymentRenewalForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.paymentrenewalform',

    requires: [
        'Ext.form.FieldSet',
        'Ext.toolbar.Toolbar',
        'Ext.toolbar.Fill',
        'Ext.button.Button',
        'Ext.view.View',
        'Ext.XTemplate',
        'Ext.form.field.File',
        'Ext.Img',
        'Ext.form.field.Radio',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Number',
        'Ext.form.field.Display',
        'Ext.form.field.Hidden'
    ],

    height: 688,
    width: 600,
    bodyPadding: 10,

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
                    flex: 1,
                    margin: '0 0 0 10',
                    title: 'Member Picture & Password Change',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'container',
                            flex: 1,
                            margin: 10,
                            items: [
                                {
                                    xtype: 'toolbar',
                                    items: [
                                        {
                                            xtype: 'tbfill'
                                        },
                                        {
                                            xtype: 'button',
                                            itemId: 'changepasswordBtn',
                                            iconCls: 'key',
                                            text: 'Change Password'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            flex: 1
                        },
                        {
                            xtype: 'fieldset',
                            flex: 4,
                            hidden: true,
                            margin: 10,
                            title: 'Member Picture',
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'fieldset',
                                    flex: 5,
                                    margin: 10,
                                    layout: 'fit',
                                    title: 'Existing Picture',
                                    items: [
                                        {
                                            xtype: 'dataview',
                                            prepareData: function(data) {
                                                //var price = data.prevailing_retail_selling_price;

                                                Ext.apply(data, {
                                                    //shortDesc: Ext.util.Format.ellipsis(data.description, 20),
                                                    shortName: Ext.util.Format.ellipsis(data.name, 18)
                                                    // price: Ext.util.Format.currency(price,'=N=',2)
                                                    //min_subs_no: Ext.util.Format.number(data.min_subscription_required, '0,000,000'),
                                                    //visibility: Ext.util.Format.ellipsis(data.visibility, 15),
                                                    //location: Ext.util.Format.ellipsis(data.storage_location, 15)
                                                });


                                                return data;

                                            },
                                            itemId: 'memberPictureDataview',
                                            itemTpl: [
                                                '<tpl for=".">',
                                                '    <div style="float:left;padding:30px 30px 30px 15px;  "class=thumb-wrap id="id">',
                                                '        <div class=thumb><img src="../admin.oneroof.com.ng/cobuy_images/icons/{picture}"  height="100" width="100"></div>',
                                                '        <div>',
                                                '          <b>{shortName} </b></br>',
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
                                            store: 'SingleMemberDetail'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'filefield',
                                    flex: 1.5,
                                    itemId: 'memberpicture',
                                    margin: 10,
                                    fieldLabel: 'Change Picture(.png/jpg)',
                                    labelWidth: 160,
                                    name: 'picture',
                                    buttonOnly: true
                                }
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            flex: 4,
                            margin: 10,
                            title: 'Member Picture',
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'fieldset',
                                    flex: 5,
                                    margin: 10,
                                    layout: 'fit',
                                    title: 'Existing Picture',
                                    items: [
                                        {
                                            xtype: 'image',
                                            itemId: 'memberPicture'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'filefield',
                                    flex: 1.5,
                                    itemId: 'memberpicture',
                                    margin: 10,
                                    fieldLabel: 'Change Picture(.png/jpg)',
                                    labelWidth: 160,
                                    name: 'picture',
                                    buttonOnly: true
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            flex: 1
                        },
                        {
                            xtype: 'container',
                            flex: 1
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    flex: 3,
                    margin: 10,
                    title: 'Subscription Payment',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'fieldset',
                            flex: 1,
                            margin: 10,
                            title: 'Payments',
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'fieldset',
                                    flex: 1.2,
                                    margin: 10,
                                    title: 'What do you want to do?',
                                    items: [
                                        {
                                            xtype: 'radiofield',
                                            anchor: '100%',
                                            itemId: 'updateonlyRadio',
                                            name: 'decision',
                                            boxLabel: 'I want to update my information only',
                                            checked: true,
                                            inputValue: '1'
                                        },
                                        {
                                            xtype: 'radiofield',
                                            anchor: '100%',
                                            itemId: 'changeMembershipTypeRadio',
                                            name: 'decision',
                                            boxLabel: 'I want to change my membership subscription type',
                                            inputValue: '1'
                                        },
                                        {
                                            xtype: 'radiofield',
                                            anchor: '100%',
                                            itemId: 'updateandrenewRadio',
                                            name: 'decision',
                                            boxLabel: 'I want to update my information  and also renew my membership subscription',
                                            inputValue: '1'
                                        },
                                        {
                                            xtype: 'radiofield',
                                            anchor: '100%',
                                            itemId: 'updateandextendRadio',
                                            name: 'decision',
                                            boxLabel: 'I want to update my information  and also extend my membership subscription',
                                            inputValue: '1'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    flex: 2,
                                    disabled: true,
                                    itemId: 'subscriptionDetailContainer',
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        {
                                            xtype: 'fieldset',
                                            flex: 1.3,
                                            margin: 10,
                                            title: 'Subscription Detail',
                                            layout: {
                                                type: 'vbox',
                                                align: 'stretch'
                                            },
                                            items: [
                                                {
                                                    xtype: 'combobox',
                                                    flex: 1,
                                                    itemId: 'typeCombo',
                                                    margin: 5,
                                                    fieldLabel: 'Membership Type',
                                                    labelWidth: 150,
                                                    name: 'new_membership_type',
                                                    editable: false,
                                                    displayField: 'name',
                                                    store: 'MembershipTypes',
                                                    valueField: 'id'
                                                },
                                                {
                                                    xtype: 'container',
                                                    flex: 3,
                                                    itemId: 'subscriptionTypeContainer',
                                                    margin: 5,
                                                    layout: 'fit',
                                                    items: [
                                                        {
                                                            xtype: 'fieldset',
                                                            margin: 5,
                                                            title: 'Subscription Type',
                                                            layout: {
                                                                type: 'hbox',
                                                                align: 'stretch'
                                                            },
                                                            items: [
                                                                {
                                                                    xtype: 'radiofield',
                                                                    flex: 1,
                                                                    itemId: 'monthlySubscriptionRadio',
                                                                    name: 'subscription_type',
                                                                    boxLabel: 'Monthly',
                                                                    checked: true,
                                                                    inputValue: 'monthly'
                                                                },
                                                                {
                                                                    xtype: 'radiofield',
                                                                    flex: 1,
                                                                    itemId: 'yearlySubscriptionRadio',
                                                                    name: 'subscription_type',
                                                                    boxLabel: 'Yearly',
                                                                    inputValue: 'yearly'
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    xtype: 'numberfield',
                                                    flex: 1,
                                                    hidden: true,
                                                    itemId: 'numberofyearsField',
                                                    margin: 5,
                                                    fieldLabel: 'Number of Years',
                                                    labelWidth: 150,
                                                    name: 'number_of_years',
                                                    minValue: 1
                                                },
                                                {
                                                    xtype: 'numberfield',
                                                    flex: 1,
                                                    itemId: 'numberofmonthsField',
                                                    margin: 5,
                                                    fieldLabel: 'Number of Months',
                                                    labelWidth: 150,
                                                    name: 'number_of_months',
                                                    minValue: 1
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'fieldset',
                                            flex: 1,
                                            itemId: 'paymentSummaryContainer',
                                            margin: 10,
                                            title: 'Payment Summary',
                                            items: [
                                                {
                                                    xtype: 'displayfield',
                                                    anchor: '100%',
                                                    fieldLabel: 'Total Subscription(=N=)',
                                                    labelWidth: 170,
                                                    name: 'gross_for_display'
                                                },
                                                {
                                                    xtype: 'displayfield',
                                                    anchor: '100%',
                                                    fieldLabel: 'Applicable Discount(=N=)',
                                                    labelWidth: 170,
                                                    name: 'discount_for_display'
                                                },
                                                {
                                                    xtype: 'displayfield',
                                                    anchor: '100%',
                                                    fieldLabel: 'Net Amount(=N=)',
                                                    labelWidth: 170,
                                                    name: 'net_for_display'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    flex: 0.6,
                                    margin: 10,
                                    title: 'Terms & Conditions',
                                    items: [
                                        {
                                            xtype: 'container',
                                            margin: 10,
                                            layout: {
                                                type: 'hbox',
                                                align: 'stretch'
                                            },
                                            items: [
                                                {
                                                    xtype: 'checkboxfield',
                                                    flex: 10,
                                                    itemId: 'termsCheckbox',
                                                    name: 'is_term_acceptable',
                                                    boxLabel: 'Accept Terms & Conditions',
                                                    inputValue: '1'
                                                },
                                                {
                                                    xtype: 'button',
                                                    flex: 2,
                                                    disabled: true,
                                                    itemId: 'termsBtn',
                                                    margin: '0 0 0 3',
                                                    text: 'Terms & Conditions'
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
                    xtype: 'numberfield',
                    hidden: true,
                    itemId: 'grossField',
                    margin: 10,
                    fieldLabel: 'Label',
                    name: 'gross'
                },
                {
                    xtype: 'numberfield',
                    hidden: true,
                    itemId: 'discountedField',
                    margin: 10,
                    fieldLabel: 'Label',
                    name: 'discount'
                },
                {
                    xtype: 'numberfield',
                    hidden: true,
                    itemId: 'netamountField',
                    margin: 10,
                    fieldLabel: 'Label',
                    name: 'net'
                },
                {
                    xtype: 'hiddenfield',
                    margin: 10,
                    fieldLabel: 'Label',
                    name: 'operation',
                    value: 'account'
                },
                {
                    xtype: 'hiddenfield',
                    margin: 10,
                    fieldLabel: 'Label',
                    name: 'user_id_of_member'
                }
            ]
        });

        me.callParent(arguments);
    }

});