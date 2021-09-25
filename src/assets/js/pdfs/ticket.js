export const docDefinition = {
  info: {
    title: 'Ticket',
    author: 'Samuel Thibault',
  },

  images: {
    logo: window.location.origin + "/img/ticket-icon.png",
  },

  pageMargins: [ 20, 80, 20, 80],

  header: {
    stack: [
      {
        columns: [
          {
            image: 'logo',
            fit: [50, 50],
            absolutePosition: {x: 20, y: 15},
            alignment: 'left',
          },
          {
            fontSize: 22,
            bold: true,
            absolutePosition: {x: 0, y: 25},
            text: 'VOTRE CONFIRMATION E-BILLET',
            alignment: 'center',
            color: '#ff0000',
          },
          {
            fontSize: 10,
            bold: false,
            absolutePosition: {x: 480, y: 60},
            text: new Date().toLocaleString('fr-FR'),
            color: '#464646',
          }
        ]
      },
      {
        canvas: [
          {
            type: 'line',
            x1: 0, y1: 80,
            x2: 595, y2: 80,
            lineWidth: 6,
            color: '#ff0000'
          },
        ]
      }
    ]
  },
  footer: function(currentPage, pageCount) {
    return [
      {
        canvas: [
          {
            type: 'rect',
            x: 0, y: 0, w: 595, h: 80,
            color: '#e7e7e7',
          },
        ]
      },
      {
        columns: [
          {
            fontSize: 8,
            bold: true,
            text: currentPage.toString() + '/' + pageCount,
            absolutePosition: { x: 300, y: 10 },
            color: '#000000',
          },
          {
            fontSize: 8,
            bold: true,
            stack: [
              'Nom de la société TYPE au capital de XXX Euros',
              'Immatriculé XXXXXXXXX - SIREN YYYYYYYY',
              '01 rue Aaa - 00000, Paris, France',
              'Tel : 0123456789 / Fax : 0123456789',
              'www.société.com',
            ],
            absolutePosition: { x: 80, y: 30 },
            color: '#000000',
          },
          {
            style: 'copyright',
            absolutePosition: { x: 500, y: 70 },
            text: 'Copyright 2021 - Samuel Thibault',
          },
        ]
      },
    ]
  },


  content: [
    {
      style: 'price',
      text: [
        {text: 'Prix du billet : ', style: 'priceName'},
        {text: '123 '+'€', style: 'priceValue'},
      ]
    },
    {
      columns: [
        {
          stack: [
            {
              style: 'field',
              text: [
                {text: 'Prénom : ', style: 'fieldName'},
                {text: 'Samuel', style: 'fieldValue'},
              ]
            },
            {
              style: 'field',
              text: [
                {text: 'Nom : ', style: 'fieldName'},
                {text: 'Thibault', style: 'fieldValue'},
              ]
            },
            {
              style: 'field',
              text: [
                {text: 'Costumer ID : ', style: 'fieldName'},
                {text: 'a1z2e3r4t5y6', style: 'fieldValue'},
              ]
            },
          ]
        },
        {
          stack: [
            {
              style: 'field',
              text: [
                {text: 'Dossier Voyage : ', style: 'fieldName'},
                {text: 'AZERTY', style: 'fieldValue'},
              ]
            },
            {
              style: 'field',
              text: [
                {text: 'Billet N° : ', style: 'fieldName'},
                {text: '123456789', style: 'fieldValue'},
              ]
            },
            {
              style: 'field',
              text: [
                {text: 'Transaction N° : ', style: 'fieldName'},
                {text: '987654321', style: 'fieldValue'},
              ]
            },
          ]
        }
      ]
    },
    {
      style: 'trip',
      columns: [
        {
          qr: 'Samuel Thibault',
          fit: '150',
          alignment: 'center'
        },
        {
          stack: [
            {
              style: 'field',
              text: [
                {text: 'Le : ', style: 'fieldName'},
                {text: '15-01-2021', style: 'fieldValue'},
              ],
            },
            {
              columns: [
                {
                  style: 'field',
                  stack: [
                    {
                      text: [
                        {text: 'From : ', style: 'fieldName'},
                        {text: 'PARIS', style: 'fieldValue'},
                      ]
                    },
                    {text: '10h00', style: 'warning'}
                  ]
                },
                {
                  style: 'field',
                  stack: [
                    {
                      text: [
                        {text: 'To : ', style: 'fieldName'},
                        {text: 'LONDRES', style: 'fieldValue'}
                      ]
                    },
                    {text: '15h00', style: 'warning'}
                  ]
                }
              ]
            },
            {
              stack: [
                {
                  style: 'field',
                  text: [
                    {text: 'Classe : ', style: 'fieldName'},
                    {text: 1, style: 'fieldValue'}
                  ]
                },
                {
                  style: 'field',
                  text: [
                    {text: 'Voiture : ', style: 'fieldName'},
                    {text: 6, style: 'fieldValue'},
                    {text: ', Siège : ', style: 'fieldName'},
                    {text: 34, style: 'fieldValue'}
                  ]
                }
              ]
            },
          ]
        }
      ]
    },
    {
      style: 'policies',
      stack: [
        {
          style: 'warning',
          text: 'Pour respecter la distance de sécurité à bord, le billet TNR est valable uniquement dans les numéros du train et de la voiture indiqués sur le ticket de voyage.'
        },
        {
          style: 'information',
          text: 'Conditions d’utilisaon / Polique de confidentialité',
        },
        {
          style: 'information',
          text: [
            'Le voyageur doit se présenter au minimum 15 minutes avant le départ du train. Lors des contrôles, il est obligatoire de présenter une pièce d’identé (ou passeport) en cours de validité avec photo.',
            'Ce e-billet est nominaf et non cessible, il est valable uniquement pour le trajet, le train, la date et le confort désignés ci-dessus.',
            'Ce e-billet doit être présenté au contrôle sur votre smartphone ou imprimé sur papier A4 blanc de bonne qualité.',
            'Nous vous informons que l’échange est actuellement disponible en gare uniquement.',
            'Ce document doit être conservé jusqu’à la sortie de la gare d’arrivée. Les condions d’après-vente de ce e-billet dépendent du tarif acheté. En cas de non-respect des conditions générales de vente et d’utilisaon ce titre sera considéré comme non valable.',
          ]
        },
        {
          style: 'warning',
          text: '*Après le départ de votre train, l\'échange est possible jusqu\'à 30 min depuis la gare de départ de votre voyage pour les e-billets concernés et dans la limite des places disponibles'
        }
      ]
    },
  ],
  styles: {
    price: {
      margin: [ 0, 40, 0, 40 ],
      alignment: 'right',
    },
    priceName: {
      fontSize: 18,
      bold: true,
      color: '#585858'
    },
    priceValue: {
      fontSize: 18,
      bold: true,
      color: '#d00000'
    },
    policies: {
      fontSize: 10,
      color: '#585858',
      margin: [ 0, 50, 0, 0 ]
    },
    warning: {
      color: '#d00000',
      bold: true
    },
    information: {
      color: '#000d7e',
    },
    trip: {
      margin: [0, 40, 0, 0]
    },
    field: {
      margin: [ 0, 0, 0, 20 ]
    },
    fieldName: {
      fontSize: 15,
      color: '#585858',
      bold: false,
    },
    fieldValue: {
      fontSize: 16,
      color: '#000d7e',
      bold: true,
    },
    copyright: {
      fontSize: 6,
      bold: false,
      color: '#000000'
    }
  }
}

export default docDefinition;
