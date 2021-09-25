export const docDefinition = {
  info: {
    title: 'Resume',
    author: 'Samuel Thibault',
  },

  images: {
    avatar: window.location.origin + "/img/avatar.png",
  },

  pageMargins: [0, 20, 0, 20],

  footer: function(currentPage, pageCount) {
    return [
      {
        columns: [
          {
            style: 'copyright',
            text: 'Copyright 2021 - Samuel Thibault',
            alignment: 'center',
            margin: [50, 0, 0, 5],
          },
          {
            fontSize: 8,
            bold: true,
            text: currentPage.toString() + '/' + pageCount,
            color: '#000000',
            alignment: 'right',
            margin: [0, 0, 10, 5],
          },
        ]
      }
    ]
  },

  content: [
    {
      absolutePosition: {x: 0, y: 0},
      canvas: [
        {
          type: 'rect',
          x: 0, y: 0, w: 120, h: 841,
          linearGradient: ["#034396", "#009494"]
        },
        {
          type: 'line',
          x1: 140, y1: 100,
          x2: 575, y2: 100,
          lineWidth: 8,
          color: '#009494'
        }
      ]
    },
    {
      image: 'avatar',
      fit: [100, 100],
      absolutePosition: {x: 10, y: 10},
      alignment: 'left'
    },
    {
      columns: [
        {
          width: 120,
          margin: [ 10, 100, 10, 0 ],
          style: 'sideTextColor',
          stack: [
            {
              text: 'Contact',
              style: 'sideTitle',
            },
            {
              stack: [
                {text: 'Adress :', style: 'sideSubtitle'},
                {text: '14, Avenue de l\'Opéra, 75001, Paris', style: 'sideContent'},
                {text: 'Phone :', style: 'sideSubtitle'},
                {text: '0612345678', style: 'sideContent'},
                {text: 'E-mail :', style: 'sideSubtitle'},
                {text: 'contact@samuel-thibault.fr', style: 'sideContent'},
              ]
            },
            {
              text: 'Personal',
              style: 'sideTitle',
            },
            {
              stack: [
                {text: 'Birthday :', style: 'sideSubtitle'},
                {text: '1983-04-26', style: 'sideContent'},
                {text: 'Nationality :', style: 'sideSubtitle'},
                {text: 'France', style: 'sideContent'},
              ]
            },
            {
              text: 'Languages',
              style: 'sideTitle',
            },
            {
              stack: [
                {text: 'English', style: 'sideContent'},
                {text: 'French', style: 'sideContent'},
                {text: '', style: 'sideContent'},
              ]
            },
            {
              text: 'Skills',
              style: 'sideTitle',
            },
            {
              stack: [
                {text: 'Programming', style: 'sideContent'},
                {text: 'Engineering', style: 'sideContent'},
                {text: '', style: 'sideContent'},
              ]
            }
          ],
        },
        {
          margin: [ 20, 0, 20, 0 ],
          stack: [
            {
              text: 'This is a Name',
              style: 'name',
            },
            {
              text: 'This is a function',
              style: 'function',
            },
            {
              text: 'About',
              style: 'titleParagraph',
            },
            {
              style: 'paragraph',
              text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
            {
              text: 'Experience',
              style: 'titleParagraph',
            },
            {
              style: 'paragraph',
              ul: [
                {
                  stack: [
                    { text: 'Item 1', style: 'titleList' },
                    {text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.'},
                  ]
                },
                {
                  stack: [
                    { text: 'Item 2', style: 'titleList' },
                    {text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.'},
                  ]
                },
                {
                  stack: [
                    { text: 'Item 3', style: 'titleList' },
                    {text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.'},
                  ]
                },
              ]
            },
            {
              text: 'Formation',
              style: 'titleParagraph',
            },
            {
              style: 'paragraph',
              ul: [
                {
                  stack: [
                    { text: 'Item 1', style: 'titleList' },
                    {text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.'},
                  ]
                },
                {
                  stack: [
                    { text: 'Item 2', style: 'titleList' },
                    {text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.'},
                  ]
                },
                {
                  stack: [
                    { text: 'Item 3', style: 'titleList' },
                    {text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.'},
                  ]
                }
              ]
            },
          ]
        }
      ]
    }
  ],
  styles: {
    name: {
      fontSize: 25,
      bold: true,
      margin: [ 0, 0, 0, 10 ],
      alignment: 'center',
      color: "#009494"
    },
    function: {
      fontSize: 18,
      bold: true,
      margin: [ 0, 0, 0, 20 ],
      alignment: 'center',
    },
    titleParagraph : {
      fontSize: 18,
      bold: true,
      margin: [ 0, 20, 0, 10 ],
      alignment: 'center'
    },
    paragraph: {
      fontSize: 13,
      italics: true,
    },
    titleList : {
      fontSize: 13,
      bold: true,
      margin: [ 0, 5, 0, 5 ],
    },
    sideTextColor: {
      color: '#FFFFFF',
    },
    sideTitle: {
      fontSize: 13,
      bold: true,
      decoration: 'underline',
      margin: [ 0, 25, 0, 10 ]
    },
    sideSubtitle: {
      bold: true,
      margin: [ 0, 0, 0, 2 ]
    },
    sideContent: {
      bold: false,
    },
    copyright: {
      fontSize: 6,
      bold: false,
      color: '#000000'
    }
  }
}

export default docDefinition;
