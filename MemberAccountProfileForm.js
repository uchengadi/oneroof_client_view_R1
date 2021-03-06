/*
 * File: app/view/MemberAccountProfileForm.js
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

Ext.define('Cobuy.view.MemberAccountProfileForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.memberaccountprofileform',

    requires: [
        'Ext.form.FieldSet',
        'Ext.form.field.Hidden',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Date',
        'Ext.Img',
        'Ext.form.field.Checkbox',
        'Ext.button.Button'
    ],

    height: 645,
    itemId: '',
    width: 1020,
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
                    flex: 9,
                    margins: '5',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'fieldset',
                            flex: 1,
                            height: 625,
                            itemId: 'memberdetailform',
                            margin: 10,
                            title: 'Membership Subscription',
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'fieldset',
                                    flex: 1.5,
                                    margin: 10,
                                    title: 'Login & Membership Information',
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            itemId: 'username',
                                            fieldLabel: 'User Name',
                                            labelWidth: 130,
                                            name: 'username',
                                            readOnly: true
                                        },
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            fieldLabel: 'Email',
                                            labelWidth: 130,
                                            name: 'email',
                                            readOnly: true,
                                            vtype: 'email'
                                        },
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            fieldLabel: 'Membership Type',
                                            labelWidth: 130,
                                            name: 'membership_type',
                                            readOnly: true
                                        },
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            fieldLabel: 'Membership Number',
                                            labelWidth: 130,
                                            name: 'membership_number',
                                            readOnly: true
                                        },
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            fieldLabel: 'Renewal Due Date',
                                            labelWidth: 130,
                                            name: 'renewal_due_date',
                                            readOnly: true
                                        },
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            itemId: 'membershipStatus',
                                            fieldLabel: 'Membership Status',
                                            labelWidth: 130,
                                            name: 'membership_status',
                                            readOnly: true
                                        },
                                        {
                                            xtype: 'hiddenfield',
                                            anchor: '100%',
                                            fieldLabel: 'Label',
                                            name: 'id'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    flex: 2,
                                    margin: 10,
                                    title: 'User Info',
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            hidden: true,
                                            fieldLabel: 'First Name',
                                            labelWidth: 130,
                                            name: 'firstname',
                                            readOnly: true
                                        },
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            hidden: true,
                                            fieldLabel: 'Middle Name',
                                            labelWidth: 130,
                                            name: 'middlename',
                                            readOnly: true
                                        },
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            hidden: true,
                                            fieldLabel: 'Last Name',
                                            labelWidth: 130,
                                            name: 'lastname',
                                            readOnly: true
                                        },
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            fieldLabel: 'Name',
                                            labelWidth: 130,
                                            name: 'name'
                                        },
                                        {
                                            xtype: 'combobox',
                                            anchor: '100%',
                                            fieldLabel: 'Gender',
                                            labelWidth: 130,
                                            name: 'gender',
                                            editable: false,
                                            displayField: 'gender',
                                            store: 'Gender',
                                            valueField: 'gender'
                                        },
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            fieldLabel: 'Address',
                                            labelWidth: 130,
                                            name: 'address1'
                                        },
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            hidden: true,
                                            fieldLabel: 'Address2',
                                            labelWidth: 130,
                                            name: 'address2'
                                        },
                                        {
                                            xtype: 'combobox',
                                            anchor: '100%',
                                            itemId: 'primaryCountryCombo',
                                            fieldLabel: 'Country',
                                            labelWidth: 130,
                                            name: 'country',
                                            editable: false,
                                            displayField: 'name',
                                            store: 'Countries',
                                            valueField: 'id'
                                        },
                                        {
                                            xtype: 'combobox',
                                            anchor: '100%',
                                            itemId: 'primaryStateCombo',
                                            fieldLabel: 'State',
                                            labelWidth: 130,
                                            name: 'state',
                                            editable: false,
                                            displayField: 'name',
                                            queryMode: 'local',
                                            store: 'StatesInACountry',
                                            valueField: 'id'
                                        },
                                        {
                                            xtype: 'combobox',
                                            anchor: '100%',
                                            itemId: 'primaryCityCombo',
                                            fieldLabel: 'City',
                                            labelWidth: 130,
                                            name: 'city',
                                            editable: false,
                                            displayField: 'name',
                                            queryMode: 'local',
                                            store: 'CitiesInAState',
                                            valueField: 'id'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            flex: 1,
                            itemId: 'additionalmemberinfoform',
                            margin: 10,
                            title: 'Additional Membership Subscription Information',
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'fieldset',
                                    flex: 0.9,
                                    margin: 10,
                                    title: 'User Info (contd)',
                                    items: [
                                        {
                                            xtype: 'datefield',
                                            anchor: '100%',
                                            fieldLabel: 'Date of Birth',
                                            labelWidth: 130,
                                            name: 'dateofbirth',
                                            format: 'd/m/Y',
                                            submitFormat: 'm/d/Y'
                                        },
                                        {
                                            xtype: 'combobox',
                                            anchor: '100%',
                                            fieldLabel: 'Religion',
                                            labelWidth: 130,
                                            name: 'religion',
                                            editable: false,
                                            displayField: 'religion',
                                            store: 'Religion',
                                            valueField: 'religion'
                                        },
                                        {
                                            xtype: 'combobox',
                                            anchor: '100%',
                                            fieldLabel: 'Marital Status',
                                            labelWidth: 130,
                                            name: 'maritalstatus',
                                            editable: false,
                                            displayField: 'maritalstatus',
                                            store: 'MaritalStatus',
                                            valueField: 'maritalstatus'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    flex: 0.9,
                                    margin: 10,
                                    title: 'Membership Category Information & Contact Numbers',
                                    items: [
                                        {
                                            xtype: 'combobox',
                                            anchor: '100%',
                                            fieldLabel: 'Membership Category',
                                            labelWidth: 150,
                                            name: 'category',
                                            editable: false,
                                            displayField: 'category',
                                            store: 'MembershipCategory',
                                            valueField: 'category'
                                        },
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            fieldLabel: 'Landline',
                                            labelWidth: 150,
                                            name: 'landline'
                                        },
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            fieldLabel: 'Mobile Number',
                                            labelWidth: 150,
                                            name: 'mobile_line'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    flex: 1.4,
                                    margin: 10,
                                    title: 'Permenant Delivery Information',
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            fieldLabel: 'Address ',
                                            labelWidth: 150,
                                            name: 'delivery_address1'
                                        },
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            hidden: true,
                                            fieldLabel: 'Address 2',
                                            labelWidth: 150,
                                            name: 'delivery_address2'
                                        },
                                        {
                                            xtype: 'combobox',
                                            anchor: '100%',
                                            itemId: 'permanentCountryCombo',
                                            fieldLabel: 'Country',
                                            labelWidth: 150,
                                            name: 'delivery_country',
                                            editable: false,
                                            displayField: 'name',
                                            store: 'Countries',
                                            valueField: 'id'
                                        },
                                        {
                                            xtype: 'combobox',
                                            anchor: '100%',
                                            itemId: 'permanentStateCombo',
                                            fieldLabel: 'State',
                                            labelWidth: 150,
                                            name: 'delivery_state',
                                            editable: false,
                                            displayField: 'name',
                                            queryMode: 'local',
                                            store: 'PermanentStatesInACountry',
                                            valueField: 'id'
                                        },
                                        {
                                            xtype: 'combobox',
                                            anchor: '100%',
                                            itemId: 'permanentCityCombo',
                                            fieldLabel: 'City',
                                            labelWidth: 150,
                                            name: 'delivery_city',
                                            editable: false,
                                            displayField: 'name',
                                            queryMode: 'local',
                                            store: 'PermanentCitiesInAState',
                                            valueField: 'id'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            flex: 1,
                            margin: 10,
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'fieldset',
                                    flex: 2,
                                    margin: 10,
                                    title: 'Additional Information for Corporate Memberships',
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            fieldLabel: 'Name of Organization',
                                            labelWidth: 150,
                                            name: 'name_of_organization'
                                        },
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            fieldLabel: 'Unique Registration No',
                                            labelWidth: 150,
                                            name: 'unique_registration_number'
                                        },
                                        {
                                            xtype: 'combobox',
                                            anchor: '100%',
                                            fieldLabel: 'Business Category',
                                            labelWidth: 150,
                                            name: 'business_category',
                                            editable: false,
                                            displayField: 'business_category',
                                            store: 'BusinessCategory',
                                            valueField: 'business_category'
                                        },
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            fieldLabel: 'Address ',
                                            labelWidth: 150,
                                            name: 'corporate_address1'
                                        },
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            hidden: true,
                                            fieldLabel: 'Address 2',
                                            labelWidth: 150,
                                            name: 'corporate_address2'
                                        },
                                        {
                                            xtype: 'combobox',
                                            anchor: '100%',
                                            itemId: 'corporateCountryCombo',
                                            fieldLabel: 'Country',
                                            labelWidth: 150,
                                            name: 'corporate_country',
                                            editable: false,
                                            displayField: 'name',
                                            store: 'Countries',
                                            valueField: 'id'
                                        },
                                        {
                                            xtype: 'combobox',
                                            anchor: '100%',
                                            itemId: 'corporateStateCombo',
                                            fieldLabel: 'State',
                                            labelWidth: 150,
                                            name: 'corporate_state',
                                            editable: false,
                                            displayField: 'name',
                                            queryMode: 'local',
                                            store: 'CorporateStatesInACountry',
                                            valueField: 'id'
                                        },
                                        {
                                            xtype: 'combobox',
                                            anchor: '100%',
                                            itemId: 'corporateCityCombo',
                                            fieldLabel: 'City',
                                            labelWidth: 150,
                                            name: 'corporate_city',
                                            editable: false,
                                            displayField: 'name',
                                            queryMode: 'local',
                                            store: 'CorporateCitiesInAState',
                                            valueField: 'id'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    hidden: true,
                                    layout: 'fit',
                                    items: [
                                        {
                                            xtype: 'image',
                                            height: 201,
                                            itemId: 'memberPicture',
                                            width: 201
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'hiddenfield',
                    flex: 1,
                    fieldLabel: 'Label',
                    name: 'city_id'
                },
                {
                    xtype: 'hiddenfield',
                    flex: 1,
                    fieldLabel: 'Label',
                    name: 'state_id'
                },
                {
                    xtype: 'hiddenfield',
                    flex: 1,
                    fieldLabel: 'Label',
                    name: 'country_id'
                },
                {
                    xtype: 'hiddenfield',
                    flex: 1,
                    fieldLabel: 'Label',
                    name: 'delivery_city_id'
                },
                {
                    xtype: 'hiddenfield',
                    flex: 1,
                    fieldLabel: 'Label',
                    name: 'delivery_state_id'
                },
                {
                    xtype: 'hiddenfield',
                    flex: 1,
                    fieldLabel: 'Label',
                    name: 'delivery_country_id'
                },
                {
                    xtype: 'hiddenfield',
                    flex: 1,
                    fieldLabel: 'Label',
                    name: 'corporate_city_id'
                },
                {
                    xtype: 'hiddenfield',
                    flex: 1,
                    fieldLabel: 'Label',
                    name: 'corporate_state_id'
                },
                {
                    xtype: 'hiddenfield',
                    flex: 1,
                    fieldLabel: 'Label',
                    name: 'corporate_country_id'
                },
                {
                    xtype: 'hiddenfield',
                    flex: 1,
                    fieldLabel: 'Label',
                    name: 'role'
                },
                {
                    xtype: 'hiddenfield',
                    flex: 1,
                    fieldLabel: 'Label',
                    name: 'status'
                },
                {
                    xtype: 'hiddenfield',
                    flex: 1,
                    fieldLabel: 'Label',
                    name: 'usertype'
                },
                {
                    xtype: 'hiddenfield',
                    flex: 1,
                    fieldLabel: 'Label',
                    name: 'membership_type_id'
                },
                {
                    xtype: 'container',
                    flex: 1,
                    margin: 5,
                    items: [
                        {
                            xtype: 'fieldset',
                            margin: 5,
                            title: 'Terms & Conditions',
                            items: [
                                {
                                    xtype: 'container',
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        {
                                            xtype: 'checkboxfield',
                                            flex: 3.5,
                                            itemId: 'updateprofileCheckbox',
                                            margin: 2,
                                            name: 'updateinfo',
                                            boxLabel: 'Accept Terms & conditions',
                                            inputValue: '1'
                                        },
                                        {
                                            xtype: 'button',
                                            flex: 0.5,
                                            disabled: true,
                                            itemId: 'termsBtn',
                                            margin: 2,
                                            text: 'Terms & conditions'
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