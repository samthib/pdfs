export const docDefinition = {
  info: {
    title: 'Business Card',
    author: 'Samuel Thibault',
  },

  pageOrientation: 'landscape',
  images: {
    logo: window.location.origin + "/img/card-icon.png",
  },

  pageMargins: [ 0, 0, 0, 0],

  content: [
    {
      absolutePosition: {x: 0, y: 0},
      canvas: [
        {
          type: 'rect',
          x: 0, y: 0, w: 841, h: 595,
          linearGradient: ["#f48520", "#df9d24", "#f48520"]
        },
        {
          type: 'ellipse',
          x: 841, y: 150,
          r1: 841, r2: 150,
          linearGradient: ["#061011", "#014d71", "#061011", "#014d71", "#061011"]
        },
        {
          type: 'rect',
          x: 0, y: 150, w: 841, h: 295,
          linearGradient: ["#061011", "#014d71", "#061011"]
        },
        {
          type: 'ellipse',
          x: 0, y: 445,
          r1: 841, r2: 150,
          linearGradient: ["#061011", "#014d71", "#061011", "#014d71", "#061011"]
        },
      ]
    },
    {
      image: 'logo',
      fit: [120, 120],
      margin: [ 0, 180, 0, 0 ],
      alignment: 'center',
    },
    {
      text: 'Company name',
      style: 'title',
    },
    {
      text: 'Slogan',
      style: 'subtitle',
    },
    {
      style: 'copyright',
      absolutePosition: { x: 10, y: 580 },
      text: 'Copyright 2021 - Samuel Thibault',
      pageBreak: 'after'
    },
    {
      absolutePosition: {x: 0, y: 0},
      canvas: [
        {
          type: 'rect',
          x: 0, y: 0, w: 841, h: 595,
          linearGradient: ["#f48520", "#df9d24", "#f48520"]
        },
        {
          type: 'ellipse',
          x: 841, y: 298,
          r1: 841, r2: 298,
          linearGradient: ["#061011", "#014d71", "#061011", "#014d71", "#061011"]
        },
      ]
    },
    {
      absolutePosition: {x: 0, y: 100},
      alignment: 'center',
      columns: [
        {
          stack: [
            {
              image: 'logo',
              fit: [120, 120],
              margin: [ 0, 120, 0, 0 ],
            },
            {
              text: 'Company name',
              style: 'subtitle'
            },
          ]
        },
        {
          stack: [
            {text: 'Samuel Thibault', style: 'name'},
            {text: 'Web Developer', style: 'occupation'},
            {text: '', margin: [0, 10, 0, 10]},
            {text: '+33768928999', style: 'telephone'},
            {text: '+212669056659', style: 'telephone'},
            {text: '', margin: [0, 10, 0, 10]},
            {text: 'contact@samuel-thibault.fr', style: 'link'},
            {text: 'www.samuel-thibault.fr', link: 'www.samuel-thibault.fr', style: 'link'},
            {text: '', margin: [0, 10, 0, 10]},
            {text: '14, Avenue de l\'opéra', style: 'adress'},
            {text: 'Paris, FRANCE', style: 'adress'},
          ]
        }
      ]
    },
    {
      absolutePosition: {x:25 , y:475},
      qr: 'https://samuel-thibault.fr',
      fit: '120',
    },
    {
      style: 'copyright',
      absolutePosition: { x: 10, y: 580 },
      text: 'Copyright 2021 - Samuel Thibault',
    },
  ],
  styles: {
    title: {
      fontSize: 65,
      bold: true,
      margin: [ 0, 20, 0, 20 ],
      alignment: 'center'
    },
    subtitle: {
      fontSize: 35,
      bold: false,
      margin: [ 0, 0, 0, 0 ],
      alignment: 'center'
    },
    name: {
      fontSize: 35,
      bold: true,
      margin: [ 0, 0, 40, 10 ],
      alignment: 'right'
    },
    occupation: {
      fontSize: 30,
      bold: true,
      margin: [ 0, 0, 40, 30 ],
      color: '#f48520',
      alignment: 'right'
    },
    telephone: {
      fontSize: 25,
      bold: false,
      margin: [ 0, 0, 40, 5 ],
      alignment: 'right',
    },
    link: {
      fontSize: 25,
      bold: false,
      margin: [ 0, 0, 40, 5 ],
      alignment: 'right',
      decoration: 'underline'
    },
    adress: {
      fontSize: 25,
      bold: false,
      margin: [ 0, 0, 40, 5 ],
      alignment: 'right',
    },
    copyright: {
      fontSize: 6,
    }
  },
  defaultStyle: {
    color: '#ffffff'
  }
}

export default docDefinition;
