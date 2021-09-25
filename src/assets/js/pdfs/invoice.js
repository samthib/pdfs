export const docDefinition = {
  info: {
    title: 'Invoice',
    author: 'Samuel Thibault',
  },

  images: {
    logo: window.location.origin + "/img/invoice-icon.png",
  },

  footer: function(currentPage, pageCount) {
    return [
      {
        columns: [
          { text: '', style: 'documentFooterLeft' },
          {
            style: 'copyright',
            text: 'Copyright 2021',
            alignment: 'center',
            margin: [0,20,0,0],
          },
          {
            fontSize: 8,
            bold: true,
            text: currentPage.toString() + '/' + pageCount,
            color: '#000000',
            alignment: 'right',
            margin: [5,5,10,5],
          },
        ]
      }
    ]
  },

  content: [
    {
      columns: [
        {
          image: 'logo',
          fit: [150, 150]
        },
        {

        stack: [
          {
            text: 'INVOICE',
            style: 'title',
            width: '*'
          },
          {
            stack: [
              {
                columns: [
                  {
                    text:'Invoice #',
                    style:'subtitle',
                    width: '*'

                  },
                  {
                    text:'00001',
                    style:'subtitleValue',
                    width: 100

                  }
                ]
              },
              {
                columns: [
                  {
                    text:'Date Issued',
                    style:'subtitle',
                    width: '*'
                  },
                  {
                    text: '2021-04-26',
                    style:'subtitleValue',
                    width: 100
                  }
                ]
              },
              {
                columns: [
                  {
                    text:'Due Date',
                    style:'subtitle',
                    width: '*'
                  },
                  {
                    text:'2021-04-26',
                    style:'subtitleValue',
                    width: 100
                  }
                ]
              },
            ]
          }
        ]
        },
      ],
    },
    {
      columns: [
        {
          text: 'Billing From',
          style:'billingTitle',

        },
        {
          text: 'Billing To',
          style:'billingTitle',

        },
      ]
    },
    {
      columns: [
        {
          text: 'Your Company',
          style: 'billingDetails'
        },
        {
          text: 'Client Company',
          style: 'billingDetails'
        },
      ]
    },
    {
      columns: [
        {
          text: 'Address',
          style: 'billingAddressName'
        },
        {
          text: 'Address',
          style: 'billingAddressName'
        },
      ]
    },
    {
      columns: [
        {
          text: '9999 Street name 1A',
          style: 'billingAddress'
        },
        {
          text: '1111 Other street 25',
          style: 'billingAddress'
        },
      ]
    },
    {
      columns: [
        {
          text: 'New-York City',
          style: 'billingAddress'
        },
        {
          text: 'New-York City',
          style: 'billingAddress'
        },
      ]
    },
    {
      columns: [
        {
          text: 'France',
          style: 'billingAddress'
        },
        {
          text: 'Italy',
          style: 'billingAddress'
        },
      ],
    },
    '\n\n',
    {
      table: {
        headerRows: 1,
        widths: ['*', 80, 'auto', 80, 80],
        body: [
          // Table Header
          [
            {
              text: 'Product',
              style: 'itemsHeader'
            },
            {
              text: 'Qty',
              style: [ 'itemsHeader', 'center']
            },
            {
              text: 'Price $',
              style: [ 'itemsHeader', 'center']
            },
            {
              text: 'Tax %',
              style: [ 'itemsHeader', 'center']
            },
            {
              text: 'Total $',
              style: [ 'itemsHeader', 'center']
            }
          ],
          [
            {
              text: 'Item 1',
              style: 'itemTitle'
            },
            {
              text:'1',
              style:'itemNumber'
            },
            {
              text:0,
              style:'itemNumber'
            },
            {
              text:0,
              style:'itemNumber'
            },
            {
              text: 0,
              style:'itemTotal'
            }
          ],
          [
            {
              text: 'Item 2',
              style:'itemTitle'
            },
            {
              text:'1',
              style:'itemNumber'
            },
            {
              text:0,
              style:'itemNumber'
            },
            {
              text:0,
              style:'itemNumber'
            },
            {
              text: 0,
              style:'itemTotal'
            }
          ],
          [
            {
              text: 'Item 3',
              style: 'itemTitle'
            },
            {
              text: '1',
              style: 'itemNumber'
            },
            {
              text: 0,
              style: 'itemNumber'
            },
            {
              text: 0,
              style: 'itemNumber'
            },
            {
              text: 0,
              style: 'itemTotal'
            }
          ],
        ]
      }, // table
    },
    // TOTAL
    {
      table: {
        headerRows: 0,
        widths: [ '*', 80 ],
        body: [
          // Total
          [
            {
              text:'Subtotal',
              style:'itemsFooterSubTitle'
            },
            {
              text: 0,
              style:'itemsFooterSubValue'
            }
          ],
          [
            {
              text:'Tax',
              style:'itemsFooterSubTitle'
            },
            {
              text: 0,
              style:'itemsFooterSubValue'
            }
          ],
          [
            {
              text:'TOTAL $',
              style:'itemsFooterTotalTitle'
            },
            {
              text: 0,
              style:'itemsFooterTotalValue'
            }
          ],
        ]
      }, // table
      layout: 'lightHorizontalLines'
    },
    // Signature
    {
      columns: [
        {
          text:'',
        },
        {
          stack: [
            {
              text: '_________________________________',
              style:'signaturePlaceholder'
            },
            {
              text: 'Your Name',
              style:'signatureName'

            },
            {
              text: 'Your job title',
              style:'signatureJob'

            }
          ],
          width: 180
        },
      ]
    },
    {
      text: 'NOTES',
      style:'notesTitle'
    },
    {
      text: 'Some notes goes here.',
      style:'notesText'
    }
  ],
  styles: {
    title: {
      fontSize: 22,
      bold: true,
      alignment:'right',
      margin:[0,0,0,15]
    },
    subtitle: {
      fontSize: 12,
      alignment:'right'
    },
    subtitleValue: {
      fontSize: 12,
      alignment:'right'
    },
    billingTitle: {
      fontSize: 14,
      bold: true,
      alignment:'left',
      margin:[0,20,0,5],
    },
    billingDetails: {
      alignment:'left'

    },
    billingAddressName: {
      margin: [0,7,0,3],
      bold: true
    },
    billingAddress: {
      bold: false,
    },
    itemsHeader: {
      margin: [0,5,0,5],
      bold: true
    },
    itemTitle: {
      bold: true,
    },
    itemSubTitle: {
      italics: true,
      fontSize: 11
    },
    itemNumber: {
      margin: [0,5,0,5],
      alignment: 'center',
    },
    itemTotal: {
      margin: [0,5,0,5],
      bold: true,
      alignment: 'center',
    },
    itemsFooterSubTitle: {
      margin: [0,5,0,5],
      bold: true,
      alignment:'right',
    },
    itemsFooterSubValue: {
      margin: [0,5,0,5],
      bold: true,
      alignment:'center',
    },
    itemsFooterTotalTitle: {
      margin: [0,5,0,5],
      bold: true,
      alignment:'right',
    },
    itemsFooterTotalValue: {
      margin: [0,5,0,5],
      bold: true,
      alignment:'center',
    },
    signaturePlaceholder: {
      margin: [0,70,0,0],
    },
    signatureName: {
      bold: true,
      alignment:'center',
    },
    signatureJob: {
      italics: true,
      fontSize: 10,
      alignment:'center',
    },
    notesTitle: {
      fontSize: 10,
      bold: true,
      margin: [0,50,0,3],
    },
    notesText: {
      fontSize: 10
    },
    center: {
      alignment:'center',
    },
    copyright: {
      fontSize: 6,
      bold: false,
      color: '#000000'
    }
  },
  defaultStyle: {
    columnGap: 20,
  }
}

export default docDefinition;
