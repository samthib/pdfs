export const docDefinition = {
  info: {
    title: 'PDF Document',
    author: 'Samuel Thibault',
    subject: 'subject of document',
    keywords: 'keywords for document',
  },

  images: {
    logo: window.location.origin + "/img/icon.png",
  },

  pageMargins: [40, 100, 40, 100],

  header: [
    {
      canvas: [
        {
          type: 'rect',
          x: 0, y: 0, w: 595, h: 80,
          linearGradient: ["#9963df", "#4186c6", "#9963df"],
        },
      ]
    },
    {
      columns: [
        {
          image: 'logo',
          width: 50,
          height: 50,
          absolutePosition: { x: 20, y: 15 },
          alignment: 'left',
        },
        {
          fontSize: 22,
          bold: true,
          absolutePosition: { x: 0, y: 25 },
          text: 'Titre',
          alignment: 'center',
          color: 'white',
        }
      ]
    },
  ],

  content: [
    {
      text: 'This is a header (whole paragraph uses the same header style)',
      style: 'header',
    },
    {
      style: 'bigger',
      italics: false,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque consequuntur ex vel minima aut! Soluta error molestias aspernatur non. Iusto dolores rem distinctio placeat cupiditate, reiciendis corporis nesciunt ullam impedit?'
    },
    {
      text: '2021-08-25'
    }
  ],
  styles: {
    header: {
      fontSize: 18,
      bold: true,
      margin: [0, 0, 0, 20]
    },
    bigger: {
      fontSize: 15,
      italics: true,
      margin: [0, 0, 0, 20]

    }
  }
}

export default docDefinition;
