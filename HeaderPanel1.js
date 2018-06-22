/*
 * File: app/view/HeaderPanel1.js
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

Ext.define('Cobuy.view.HeaderPanel1', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.headerpanel',

    requires: [
        'Cobuy.view.PartHeaderPanel',
        'Ext.panel.Panel',
        'Ext.Img',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.toolbar.Separator'
    ],

    height: 100,
    width: 400,
    bodyBorder: false,
    bodyPadding: '0 0 0 20',
    bodyStyle: 'background:black; padding:3px;',
    header: false,
    title: 'My Panel',

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    flex: 0.15,
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'image',
                            cls: 'ovAddComponentClickEvent',
                            itemId: 'logo',
                            style: {
                                cursor: 'pointer'
                            },
                            src: '..//admin.oneroof.com.ng/cobuy_images/home/oneroof.png'
                        }
                    ]
                },
                {
                    xtype: 'partheaderpanel',
                    flex: 0.9
                },
                {
                    xtype: 'container',
                    flex: 0.4
                },
                {
                    xtype: 'panel',
                    flex: 1.3,
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            items: [
                                {
                                    xtype: 'button',
                                    disabled: true,
                                    itemId: 'accountsBtn',
                                    style: 'background:#2CE6F7;',
                                    iconCls: 'user_2',
                                    text: 'My Oneroof'
                                },
                                {
                                    xtype: 'tbseparator'
                                },
                                {
                                    xtype: 'button',
                                    disabled: true,
                                    itemId: 'cartBtn',
                                    style: 'background:#2CE6F7;',
                                    iconCls: 'cart',
                                    text: 'Cart'
                                },
                                {
                                    xtype: 'tbseparator',
                                    hidden: true
                                },
                                {
                                    xtype: 'button',
                                    hidden: true,
                                    itemId: 'getitformeBtn',
                                    style: 'background:#2CE6F7;',
                                    text: 'Get it for me!'
                                },
                                {
                                    xtype: 'tbseparator'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'contactusBtn',
                                    style: 'background:#2CE6F7;',
                                    text: 'Contact Us'
                                },
                                {
                                    xtype: 'tbseparator',
                                    itemId: 'joinSeparator'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'joinBtn',
                                    style: 'background:#8CD600;',
                                    iconCls: 'user',
                                    text: 'Register'
                                },
                                {
                                    xtype: 'tbseparator'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'signinBtn',
                                    style: 'background:#8CD600;',
                                    iconCls: 'key',
                                    text: 'Sign In'
                                },
                                {
                                    xtype: 'button',
                                    hidden: true,
                                    itemId: 'logoutBtn',
                                    style: 'background:#8CD600;',
                                    text: 'Log Out'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    flex: 0.25
                }
            ]
        });

        me.callParent(arguments);
    }

});