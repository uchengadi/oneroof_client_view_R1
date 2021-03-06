/*
 * File: app/view/PreviewingEscrowFileWin.js
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

Ext.define('Cobuy.view.PreviewingEscrowFileWin', {
    extend: 'Ext.window.Window',
    alias: 'widget.previewingescrowfilewin',

    requires: [
        'Ext.view.View',
        'Ext.XTemplate',
        'Ext.form.Panel',
        'Ext.form.field.Hidden',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button'
    ],

    height: 500,
    width: 600,
    layout: 'fit',
    title: 'Viewing Escrow Document',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'dataview',
                    prepareData: function(data) {
                        Ext.apply(data, {
                            shortDesc: Ext.util.Format.ellipsis(data.description, 20),
                            shortName: Ext.util.Format.ellipsis(data.name, 20)
                            // sizeString: Ext.util.Format.fileSize(data.size),
                            // dateString: Ext.util.Format.date(data.lastmod, "m/d/Y g:i a")
                        });
                        return data;
                    },
                    itemId: 'escrowFileDataview',
                    itemSelector: 'div.thumb-wrap',
                    itemTpl: [
                        '<tpl for=".">',
                        '    <div style="float:left;padding:30px 30px 30px 15px;  "class=thumb-wrap id="id">',
                        '        <div class=thumb><embed src="../cobuy_images/escrow/{escrow_agreement_file}" width="600" height="600" alt="pdf" pluginspage="http://www.adobe.com/products/acrobat/readstep2.html">>',
                        '            ',
                        '            </div>',
                        '            ',
                        '        <div>',
                        '        <!--    <b>{shortName} </b></br> -->',
                        '        <!--<spam>{description} </spam> -->',
                        '          <!-- <span style=class=x-editable>{shortDesc}</span> -->',
                        '             ',
                        '        </div>',
                        '        ',
                        '    </tpl>',
                        '<div class=x-clear></div>'
                    ],
                    store: 'EscrowDetail'
                },
                {
                    xtype: 'form',
                    hidden: true,
                    itemId: 'escrowidform',
                    bodyPadding: 10,
                    title: 'My Form',
                    items: [
                        {
                            xtype: 'hiddenfield',
                            fieldLabel: 'Label',
                            name: 'escrow_id'
                        }
                    ]
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'closeBtn',
                            iconCls: 'cancel',
                            text: 'Close'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});