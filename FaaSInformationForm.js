/*
 * File: app/view/FaaSInformationForm.js
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

Ext.define('Cobuy.view.FaaSInformationForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.faasinformationform',

    requires: [
        'Ext.Img',
        'Ext.form.FieldSet',
        'Ext.form.Label',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.toolbar.Fill'
    ],

    height: 650,
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
                    xtype: 'container',
                    flex: 1,
                    itemId: 'overview',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'container',
                            flex: 1,
                            margin: 5,
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    hidden: true,
                                    margin: 5,
                                    layout: 'fit',
                                    items: [
                                        {
                                            xtype: 'image',
                                            height: 201,
                                            width: 201,
                                            src: '../admin.oneroof.com.ng/cobuy_images/home/north_central_1.jpg'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    flex: 3,
                                    margin: 5,
                                    layout: 'fit',
                                    items: [
                                        {
                                            xtype: 'fieldset',
                                            title: 'Overview',
                                            items: [
                                                {
                                                    xtype: 'label',
                                                    html: '<ul style="list-style-type:square"><li>Oneroof leases farmlands across the country</li><li>We splits these farmlands into Regions and Availability Zones</li><li>Availability Zones(AZ) has multiple farms  and only one crop will be planted per farm at any farming season</li><li>The farm may or may not be contagious and are divided into slots of 1 by 1 square meters</li><li>In the case of livestock, a slot is a unit of that animal</li><li>We provide all the expertise, technology and manpower to work on the farm</li><li>We provide the marketplace to trade both the slots and the harvested commodities</li></ul>'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            flex: 1.8,
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'container',
                                    flex: 1.5,
                                    margin: 5,
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        {
                                            xtype: 'container',
                                            flex: 3,
                                            margin: 5,
                                            layout: 'fit',
                                            items: [
                                                {
                                                    xtype: 'fieldset',
                                                    title: 'Targeted Agricultural Crops & Livestock',
                                                    items: [
                                                        {
                                                            xtype: 'label',
                                                            html: '<ul style="list-style-type:square">   <li>The Crops that will be farmed across the regions are: Maize, Cassava, Rice, Beans, Tomatoes, Melon, Groundnut, Wheat, Yam, Sorghum, Potato, Soyabeans, Vegetables etc</li>   <li>Other crops include: Cocoa, Citrus, Oil Palm, Rubber, Cashew, Sugarcane, Cotton  etc</li>   <li>For livestock, the following animals will be farmed: Poultry birds, Fish, Pigs, Cattle, Sheep and Goat</li> </ul>'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            flex: 1,
                                            margin: 5,
                                            layout: 'fit',
                                            items: [
                                                {
                                                    xtype: 'image',
                                                    src: '../admin.oneroof.com.ng/cobuy_images/home/north_east_1.jpg'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    flex: 1.55,
                                    margin: 5,
                                    layout: {
                                        type: 'hbox',
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
                                                    xtype: 'image',
                                                    height: 201,
                                                    width: 201,
                                                    src: '../admin.oneroof.com.ng/cobuy_images/home/north_west_2.jpg'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            flex: 4,
                                            margin: 5,
                                            layout: 'fit',
                                            items: [
                                                {
                                                    xtype: 'fieldset',
                                                    title: 'Risk Management',
                                                    items: [
                                                        {
                                                            xtype: 'label',
                                                            html: '<ul style="list-style-type:square">    <li>All farms and livestock will be insured with the Nigerian Agricultural Insurance Corporation</li>    <li>For crops the covered risk will include Fire, Drought, Flood, Diseases, Pest and Windstorm</li>   <li>For livestock the covered risk will include Death of Animals resulting from accident or diseases, Fire, Storm, Flood and lightening</li><li>For all other uncovered risk, the Sub-Farm  will serve as the mitigant</li> </ul>'
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
                },
                {
                    xtype: 'container',
                    flex: 1,
                    itemId: 'others',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'container',
                            flex: 1.8,
                            margin: 5,
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'container',
                                    flex: 4,
                                    margin: 5,
                                    layout: 'fit',
                                    items: [
                                        {
                                            xtype: 'fieldset',
                                            title: 'Subscription & Trading',
                                            items: [
                                                {
                                                    xtype: 'label',
                                                    html: '<ul style="list-style-type:square">   <li>The ownership of a farm is by monthly subscription</li>   <li>Subscription is made on a multiple of 1 by 1 square meters slot of a farm or in the case of livestock on per individual animal</li>   <li>A customer\'s monthly subscription fee depends on the stage he/she enters the farm season</li>   <li>A subscriber does not have to wait to maturity. He/She can sell off the acquired slots at any growth stage on the marketplace</li>   <li>All farms across all Availability Zones and Regions are available for subscription</li>   <li>Monthly subscription cost differs depending on the crop, th Region and the Availability Zone</li>  </ul>'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    margin: 5,
                                    layout: 'fit',
                                    items: [
                                        {
                                            xtype: 'image',
                                            src: '../admin.oneroof.com.ng/cobuy_images/home/north_az.png'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            flex: 1.5,
                            margin: 5,
                            layout: {
                                type: 'hbox',
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
                                            xtype: 'image',
                                            src: '../admin.oneroof.com.ng/cobuy_images/home/east_az.jpg'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    flex: 4,
                                    margin: 5,
                                    layout: 'fit',
                                    items: [
                                        {
                                            xtype: 'fieldset',
                                            title: 'Growth Stages',
                                            items: [
                                                {
                                                    xtype: 'label',
                                                    html: '<ul style="list-style-type:square">   <li>All crops and Livestock have growth stages</li>   <li>Each Growth Stage is a value point</li>   <li>The Growth stage starts from the seeding to the harvest stage</li>   <li>Between these stages,we have the "ON", "ONE", "ONER", "ONERO", "ONEROO", "ONEROOF" stages</li>   <li>Each Crop and livestock does not necessarily need to have all these stages in their cycle</li>    <li>The period between one Growth stage to the next differs depending on the crop or livestock</li> </ul>'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            flex: 0.9,
                            margin: 5,
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'container',
                                    flex: 4,
                                    margin: 5,
                                    layout: 'fit',
                                    items: [
                                        {
                                            xtype: 'fieldset',
                                            title: 'Exit & Maturity',
                                            items: [
                                                {
                                                    xtype: 'label',
                                                    html: '<ul style="list-style-type:square">   <li>On Maturity the farm is harvested and the produce shared to the subscribers in the ratio of their slot holding </li>   <li>For subscribers that want to trade on their produce, their commodity is automatically enrolled in the "Commodity As A Service" programme</li>   <li>Milk</li> </ul>'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    margin: 5,
                                    layout: 'fit',
                                    items: [
                                        {
                                            xtype: 'image',
                                            src: '../admin.oneroof.com.ng/cobuy_images/home/farming.jpg'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'closeBtn',
                            iconCls: 'delete',
                            text: 'Close'
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            itemId: 'contactusBtn',
                            iconCls: 'download',
                            text: 'Need More Information?'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});