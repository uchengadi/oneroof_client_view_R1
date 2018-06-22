/*
 * File: app/view/ContentsOfAHamperFieldset.js
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

Ext.define('Cobuy.view.ContentsOfAHamperFieldset', {
    extend: 'Ext.form.FieldSet',
    alias: 'widget.contentsofahamperfieldset',

    requires: [
        'Ext.view.View',
        'Ext.XTemplate'
    ],

    layout: 'fit',
    title: 'Contents of this hamper',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'dataview',
                    prepareData: function(data) {
                        var price = data.prevailing_retail_selling_price;

                        console.log('tis data is:',data);

                        Ext.apply(data, {
                            shortDesc: Ext.util.Format.ellipsis("____________________", 20),
                            shortName: Ext.util.Format.ellipsis(data.name, 20),
                            price: Ext.util.Format.currency(price,'=N=',2)
                            //min_subs_no: Ext.util.Format.number(data.min_subscription_required, '0,000,000'),
                            //visibility: Ext.util.Format.ellipsis(data.visibility, 15),
                            //location: Ext.util.Format.ellipsis(data.storage_location, 15)
                        });


                        return data;

                    },
                    cls: 'my-dataview-cls',
                    itemId: 'hamperDirectDataview',
                    autoScroll: true,
                    itemSelector: 'div.thumb-wrap',
                    itemTpl: [
                        '<tpl for=".">',
                        '    <div style="float:left;padding:	30px 30px 30px 30px;  "class=thumb-wrap id="id">',
                        '        <div class=thumb><img src="../admin.oneroof.com.ng/cobuy_images/icons/{icon}"  height="80" width="50"></div>',
                        '        <div>',
                        '        <h5> <b>{shortName} </b></br></h5>',
                        '        <h5> <b>{shortDesc} </b></br></h5>',
                        '        <!--<h5><em>{price} </em></br></h5> -->',
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
                    store: 'HamperHasProducts'
                }
            ]
        });

        me.callParent(arguments);
    }

});