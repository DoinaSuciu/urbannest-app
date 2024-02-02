import carlyCounterImg from '../assets/products/kitchen/bar-stools/carly-counter-bar-stool/Carly+Counter+&+Bar+Stool-1.webp'
import carlyCounterImg2 from '../assets/products/kitchen/bar-stools/carly-counter-bar-stool/Carly+Counter+&+Bar+Stool-2.webp'
import carlyCounterImg3 from '../assets/products/kitchen/bar-stools/carly-counter-bar-stool/Carly+Counter+&+Bar+Stool-3.webp'
import carlyCounterImg4 from '../assets/products/kitchen/bar-stools/carly-counter-bar-stool/Carly+Counter+&+Bar+Stool.webp'
import radcliffeSwivelImg from '../assets/products/kitchen/bar-stools/radcliffe-bar-stool/Radcliffe+Swivel+Counter+&+Bar+Stool-2.webp'
import radcliffeSwivelImg2 from '../assets/products/kitchen/bar-stools/radcliffe-bar-stool/Radcliffe+Swivel+Counter+&+Bar+Stool.webp'
import radcliffeSwivelImg3 from '../assets/products/kitchen/bar-stools/radcliffe-bar-stool/Radcliffe+Swivel+Counter+&+Bar+Stool-1.webp'
import radcliffeSwivelImg4 from '../assets/products/kitchen/bar-stools/radcliffe-bar-stool/Radcliffe+Swivel+Counter+&+Bar+Stool-3.webp'
import dorotheaRoundDiningTableImg from '../assets/products/kitchen/tables/dorothea-round-dining-table/Dorothea+Round+Dining+Table-1.webp'
import dorotheaRoundDiningTableImg2 from '../assets/products/kitchen/tables/dorothea-round-dining-table/Dorothea+Round+Dining+Table-2.webp'
import dorotheaRoundDiningTableImg3 from '../assets/products/kitchen/tables/dorothea-round-dining-table/Dorothea+Round+Dining+Table-3.webp'
import dorotheaRoundDiningTableImg4 from '../assets/products/kitchen/tables/dorothea-round-dining-table/Dorothea+Round+Dining+Table.webp'
import chandiceRoundDiningTableImg from '../assets/products/kitchen/tables/chandice-round-dining-table/Chandice+Round+Dining+Table.webp'
import chandiceRoundDiningTableImg2 from '../assets/products/kitchen/tables/chandice-round-dining-table/Chandice+Round+Dining+Table-1.webp'
import chandiceRoundDiningTableImg3 from '../assets/products/kitchen/tables/chandice-round-dining-table/Chandice+Round+Dining+Table-2.webp'
import chandiceRoundDiningTableImg4 from '../assets/products/kitchen/tables/chandice-round-dining-table/Chandice+Round+Dining+Table-3.webp'
import { ProductType } from '../models/ProductType'

export const products: ProductType[] = [
  {
    id: 'SS001',
    type: 'kitchen',
    category: 'bar stool',
    name: 'Carly Counter & Bar Stool',
    shortDescription: 'Stylish Bar Stool',
    description: `Refresh your space with our upholstered bar and counter stool.
                  Luxe velvet with diamond tufting adds texture, while tapered legs in a sleek black
                  hue add an edgy touch. Plus, this chair comes in a range of color options and features
                  a built-in footrest for added support.`,
    price: 250,
    image: carlyCounterImg,
    images: [carlyCounterImg, carlyCounterImg2, carlyCounterImg3, carlyCounterImg4],
    list: [
      {
        color: 'blue velvet',
        value: '#1E222B',
        stock: 8
      },
      {
        color: 'brown velvet',
        value: '#7C4A39',
        stock: 9
      },
      {
        color: 'grey',
        value: '#282B2C',
        stock: 10
      },
      {
        color: 'amber velvet',
        value: '#978879',
        stock: 11
      }
    ],
    sizes: ['L', 'XL', 'XS'],
    colors: ['blue velvet', 'brown velvet', 'gray', 'amber velvet'],
    rating: 4.5,
    discount: 10,
    timeStamp: new Date().toUTCString(),
    quantitySold: 12,
    additionalInformation: 'No additional information',
    reviews: [
      {
        id: 'RW1',
        name: 'John Doe',
        comment: `Love these chairs, they look beautiful and match our light wood kitchen perfectly.
      They are super comfortable and very sturdy. The swivel is excellent, and I could sit in them all day.
      There is a bit of variation in the firmness of the cushions. One of the chairs has a really firm cushion.`,
        rating: 5,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW2',
        name: 'Allison Baker',
        comment: `I love these countertop height stools more every day! They are so comfortable, sturdy,
      fit perfectly into my decor, and I also enjoy the effortless swivel.`,
        rating: 4,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW3',
        name: 'Julia Baker',
        comment: `These are super comfy and the swivel feature glides smoothly!`,
        rating: 5,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW4',
        name: 'Julia Baker',
        comment: `This is a great stool. Excellent price. It’s quite comfortable and good looking. Swivels nicely. My disappointment is in the color.
      The sand color is quite dark—even if it doesn’t look that way in pics. I was hoping for more of a natural, off white and this color doesn’t
       work in my kitchen. I kept it for another spot in my home. But wished it had worked in kitchen. Please offer an off white.`,
        rating: 4,
        timeStamp: new Date().toUTCString()
      }
    ]
  },
  {
    id: 'SS002',
    type: 'kitchen',
    category: 'bar stool',
    name: 'Radcliffe Counter Stool',
    shortDescription: 'Stylish Bar Stool',
    description: `Add an elegant, yet practical touch to your kitchen counter or home bar with this stool.
                  Upholstered in a neutral polyester-blend fabric, this wingback-style dining chair features clean lines
                  and a curved back that strikes a sophisticated silhouette.`,
    price: 320,
    image: radcliffeSwivelImg,
    images: [
      radcliffeSwivelImg2,
      radcliffeSwivelImg3,
      radcliffeSwivelImg4,
      radcliffeSwivelImg
    ],
    list: [
      {
        color: 'sand',
        value: '#F09B59',
        stock: 8
      },
      {
        color: 'pink',
        value: '#EF88BE',
        stock: 9
      },
      {
        color: 'gray',
        value: '#C0C0C0',
        stock: 10
      },
      {
        color: 'blue',
        value: '#3580BB',
        stock: 11
      }
    ],
    sizes: ['L', 'XL', 'XS'],
    colors: ['brown', 'pink', 'gray', 'blue'],
    rating: 2.5,
    discount: 10,
    timeStamp: new Date().toUTCString(),
    quantitySold: 69,
    additionalInformation: 'No additional information',
    reviews: [
      {
        id: 'RW11',
        name: 'John Doe',
        comment: `Love these chairs, they look beautiful and match our light wood kitchen perfectly.
      They are super comfortable and very sturdy. The swivel is excellent, and I could sit in them all day.
      There is a bit of variation in the firmness of the cushions. One of the chairs has a really firm cushion.`,
        rating: 4,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW12',
        name: 'Allison Baker',
        comment: `These bar stools are incredibly flimsy and lightweight. They have a crease down the center where the two pieces of
        the seat come together that you are able to feel when you sit in them so they are very uncomfortable. Considering how expensive
         they were I feel they are a terrible value for what you get. I like the color but they look and feel very cheap.`,
        rating: 2,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW13',
        name: 'Julia Baker',
        comment: `Not the best product. It is as pictured, except they look about $200 cheaper in person. The screws come loose and the
         chairs feel like they're starting to wear out after having them for less than a year`,
        rating: 3,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW14',
        name: 'Janice Baker',
        comment: `Chair arrived without any hardware so unable to put the chair together. Price also increased by 17% to order new ones.
        Disappointed with the customer service when trying to rectify this order.`,
        rating: 1,
        timeStamp: new Date().toUTCString()
      }
    ]
  },
  {
    id: 'SS003',
    type: 'living-room',
    category: 'tables',
    name: 'Dorothea Dining Table',
    shortDescription: 'Stylish Bar Stool',
    description: `This table is a handcrafted dining table made from high-quality Indian hardwood,
                  which flaunts a sleek top that is circular in shape. The top is supported by an inverse pedestal
                  mounted on a semi-spherical base that has a ritzy look to it. It is polished in a brown tone or
                  charcoal gray with a natural wooden texture to it. Designed to seat four, the dining table is
                  a great choice that aligns with modern design styles.`,
    price: 3060,
    image: dorotheaRoundDiningTableImg,
    images: [
      dorotheaRoundDiningTableImg2,
      dorotheaRoundDiningTableImg3,
      dorotheaRoundDiningTableImg4,
      dorotheaRoundDiningTableImg
    ],
    list: [
      {
        color: 'orange',
        value: '#715429',
        stock: 8
      },
      {
        color: 'brown',
        value: '#45392E',
        stock: 9
      }
    ],
    sizes: [],
    colors: ['orange', 'brown'],
    rating: 3.8,
    discount: 0,
    timeStamp: new Date().toUTCString(),
    quantitySold: 35,
    additionalInformation: 'No additional information',
    reviews: [
      {
        id: 'RW21',
        name: 'John Doe',
        comment: `Love these chairs, they look beautiful and match our light wood kitchen perfectly.
      They are super comfortable and very sturdy. The swivel is excellent, and I could sit in them all day.
      There is a bit of variation in the firmness of the cushions. One of the chairs has a really firm cushion.`,
        rating: 5,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW22',
        name: 'Allison Baker',
        comment: `I love these countertop height stools more every day! They are so comfortable, sturdy,
      fit perfectly into my decor, and I also enjoy the effortless swivel.`,
        rating: 4,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW23',
        name: 'Julia Baker',
        comment: `These are super comfy and the swivel feature glides smoothly!`,
        rating: 5,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW24',
        name: 'Julia Baker',
        comment: `This is a great stool. Excellent price. It’s quite comfortable and good looking. Swivels nicely. My disappointment is in the color.
      The sand color is quite dark—even if it doesn’t look that way in pics. I was hoping for more of a natural, off white and this color doesn’t
       work in my kitchen. I kept it for another spot in my home. But wished it had worked in kitchen. Please offer an off white.`,
        rating: 4,
        timeStamp: new Date().toUTCString()
      }
    ]
  },
  {
    id: 'SS004',
    type: 'kitchen',
    category: 'tables',
    name: 'Chandice Dining Table',
    shortDescription: 'Stylish Bar Stool',
    description: `This dining table pairs slightly flared legs and a circular tabletop to give you a
                  clean-lined design that's easy to mix and match. It's made from a solid elm wood frame with a classic
                  bentwood design and a dark, rich finish that's warm and approachable. We love the tempered glass
                  tabletop, which is laid over natural cane for an airy element that pops set against the dark wood.`,
    price: 810,
    image: chandiceRoundDiningTableImg,
    images: [
      chandiceRoundDiningTableImg2,
      chandiceRoundDiningTableImg3,
      chandiceRoundDiningTableImg4,
      chandiceRoundDiningTableImg
    ],
    list: [
      {
        color: 'brown',
        value: '#784315',
        stock: 8
      },
      {
        color: 'black',
        value: '#000000',
        stock: 9
      }
    ],
    sizes: [],
    colors: ['brown', 'black'],
    rating: 4.75,
    discount: 15,
    timeStamp: new Date().toUTCString(),
    quantitySold: 46,
    additionalInformation: 'No additional information',
    reviews: [
      {
        id: 'RW1',
        name: 'John Doe',
        comment: `Love these chairs, they look beautiful and match our light wood kitchen perfectly.
      They are super comfortable and very sturdy. The swivel is excellent, and I could sit in them all day.
      There is a bit of variation in the firmness of the cushions. One of the chairs has a really firm cushion.`,
        rating: 5,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW2',
        name: 'Allison Baker',
        comment: `I love these countertop height stools more every day! They are so comfortable, sturdy,
      fit perfectly into my decor, and I also enjoy the effortless swivel.`,
        rating: 4,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW3',
        name: 'Julia Baker',
        comment: `These are super comfy and the swivel feature glides smoothly!`,
        rating: 5,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW4',
        name: 'Alice Baker',
        comment: `The quality is great and ver sturdy. Looks great in my new kitchen`,
        rating: 5,
        timeStamp: new Date().toUTCString()
      }
    ]
  },
  {
    id: 'SS005',
    type: 'bedroom',
    category: 'bar stool',
    name: 'Carly Counter & Bar Stool',
    shortDescription: 'Stylish Bar Stool',
    description: `Refresh your space with our upholstered bar and counter stool.
                  Luxe velvet with diamond tufting adds texture, while tapered legs in a sleek black
                  hue add an edgy touch. Plus, this chair comes in a range of color options and features
                  a built-in footrest for added support.`,
    price: 250,
    image: carlyCounterImg,
    images: [carlyCounterImg2, carlyCounterImg3, carlyCounterImg4, carlyCounterImg],
    list: [
      {
        color: 'blue velvet',
        value: '#1E222B',
        stock: 8
      },
      {
        color: 'brown velvet',
        value: '#7C4A39',
        stock: 9
      },
      {
        color: 'grey',
        value: '#282B2C',
        stock: 10
      },
      {
        color: 'amber velvet',
        value: '#978879',
        stock: 11
      }
    ],
    sizes: ['L', 'XL', 'XS'],
    colors: ['blue velvet', 'amber velvet', 'gray', 'light brown velvet'],
    rating: 4.6,
    discount: 10,
    timeStamp: new Date().toUTCString(),
    quantitySold: 35,
    additionalInformation: 'No additional information',
    reviews: [
      {
        id: 'RW1',
        name: 'John Doe',
        comment: `Love these chairs, they look beautiful and match our light wood kitchen perfectly.
      They are super comfortable and very sturdy. The swivel is excellent, and I could sit in them all day.
      There is a bit of variation in the firmness of the cushions. One of the chairs has a really firm cushion.`,
        rating: 5,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW2',
        name: 'Allison Baker',
        comment: `I love these countertop height stools more every day! They are so comfortable, sturdy,
      fit perfectly into my decor, and I also enjoy the effortless swivel.`,
        rating: 4,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW3',
        name: 'Julia Baker',
        comment: `These are super comfy and the swivel feature glides smoothly!`,
        rating: 5,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW4',
        name: 'Julia Baker',
        comment: `This is a great stool. Excellent price. It’s quite comfortable and good looking. Swivels nicely. My disappointment is in the color.
      The sand color is quite dark—even if it doesn’t look that way in pics. I was hoping for more of a natural, off white and this color doesn’t
       work in my kitchen. I kept it for another spot in my home. But wished it had worked in kitchen. Please offer an off white.`,
        rating: 4,
        timeStamp: new Date().toUTCString()
      }
    ]
  },
  {
    id: 'SS006',
    type: 'living-room',
    category: 'bar stool',
    name: 'Radcliffe Counter Stool',
    shortDescription: 'Stylish Bar Stool',
    description: `Add an elegant, yet practical touch to your kitchen counter or home bar with this stool.
                  Upholstered in a neutral polyester-blend fabric, this wingback-style dining chair features clean lines
                  and a curved back that strikes a sophisticated silhouette.`,
    price: 320,
    image: radcliffeSwivelImg,
    images: [
      radcliffeSwivelImg2,
      radcliffeSwivelImg3,
      radcliffeSwivelImg4,
      radcliffeSwivelImg
    ],
    list: [
      {
        color: 'sand',
        value: '#F09B59',
        stock: 8
      },
      {
        color: 'pink',
        value: '#EF88BE',
        stock: 9
      },
      {
        color: 'gray',
        value: '#C0C0C0',
        stock: 10
      },
      {
        color: 'blue',
        value: '#3580BB',
        stock: 11
      }
    ],
    sizes: ['L', 'XL', 'XS'],
    colors: ['brown', 'pink', 'gray', 'blue'],
    rating: 4.5,
    discount: 10,
    timeStamp: new Date().toUTCString(),
    quantitySold: 26,
    additionalInformation: 'No additional information',
    reviews: [
      {
        id: 'RW1',
        name: 'John Doe',
        comment: `Love these chairs, they look beautiful and match our light wood kitchen perfectly.
      They are super comfortable and very sturdy. The swivel is excellent, and I could sit in them all day.
      There is a bit of variation in the firmness of the cushions. One of the chairs has a really firm cushion.`,
        rating: 5,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW2',
        name: 'Allison Baker',
        comment: `I love these countertop height stools more every day! They are so comfortable, sturdy,
      fit perfectly into my decor, and I also enjoy the effortless swivel.`,
        rating: 4,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW3',
        name: 'Julia Baker',
        comment: `These are super comfy and the swivel feature glides smoothly!`,
        rating: 5,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW4',
        name: 'Julia Baker',
        comment: `This is a great stool. Excellent price. It’s quite comfortable and good looking. Swivels nicely. My disappointment is in the color.
      The sand color is quite dark—even if it doesn’t look that way in pics. I was hoping for more of a natural, off white and this color doesn’t
       work in my kitchen. I kept it for another spot in my home. But wished it had worked in kitchen. Please offer an off white.`,
        rating: 4,
        timeStamp: new Date().toUTCString()
      }
    ]
  },
  {
    id: 'SS007',
    type: 'living-room',
    category: 'tables',
    name: 'Dorothea Dining Table',
    shortDescription: 'Stylish Bar Stool',
    description: `This table is a handcrafted dining table made from high-quality Indian hardwood,
                  which flaunts a sleek top that is circular in shape. The top is supported by an inverse pedestal
                  mounted on a semi-spherical base that has a ritzy look to it. It is polished in a brown tone or
                  charcoal gray with a natural wooden texture to it. Designed to seat four, the dining table is
                  a great choice that aligns with modern design styles.`,
    price: 3060,
    image: dorotheaRoundDiningTableImg,
    images: [
      dorotheaRoundDiningTableImg2,
      dorotheaRoundDiningTableImg3,
      dorotheaRoundDiningTableImg4,
      dorotheaRoundDiningTableImg
    ],
    list: [
      {
        color: 'orange',
        value: '#715429',
        stock: 8
      },
      {
        color: 'brown',
        value: '#45392E',
        stock: 9
      }
    ],
    sizes: [],
    colors: ['orange', 'brown'],
    rating: 3.8,
    discount: 0,
    timeStamp: new Date().toUTCString(),
    quantitySold: 14,
    additionalInformation: 'No additional information',
    reviews: [
      {
        id: 'RW1',
        name: 'John Doe',
        comment: `Love these chairs, they look beautiful and match our light wood kitchen perfectly.
      They are super comfortable and very sturdy. The swivel is excellent, and I could sit in them all day.
      There is a bit of variation in the firmness of the cushions. One of the chairs has a really firm cushion.`,
        rating: 5,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW2',
        name: 'Allison Baker',
        comment: `I love these countertop height stools more every day! They are so comfortable, sturdy,
      fit perfectly into my decor, and I also enjoy the effortless swivel.`,
        rating: 4,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW3',
        name: 'Julia Baker',
        comment: `These are super comfy and the swivel feature glides smoothly!`,
        rating: 5,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW4',
        name: 'Julia Baker',
        comment: `This is a great stool. Excellent price. It’s quite comfortable and good looking. Swivels nicely. My disappointment is in the color.
      The sand color is quite dark—even if it doesn’t look that way in pics. I was hoping for more of a natural, off white and this color doesn’t
       work in my kitchen. I kept it for another spot in my home. But wished it had worked in kitchen. Please offer an off white.`,
        rating: 4,
        timeStamp: new Date().toUTCString()
      }
    ]
  },
  {
    id: 'SS008',
    type: 'bedroom',
    category: 'tables',
    name: 'Chandice Dining Table',
    shortDescription: 'Stylish Bar Stool',
    description: `This dining table pairs slightly flared legs and a circular tabletop to give you a
                  clean-lined design that's easy to mix and match. It's made from a solid elm wood frame with a classic
                  bentwood design and a dark, rich finish that's warm and approachable. We love the tempered glass
                  tabletop, which is laid over natural cane for an airy element that pops set against the dark wood.`,
    price: 810,
    image: chandiceRoundDiningTableImg,
    images: [
      chandiceRoundDiningTableImg2,
      chandiceRoundDiningTableImg3,
      chandiceRoundDiningTableImg4,
      chandiceRoundDiningTableImg
    ],
    list: [
      {
        color: 'brown',
        value: '#784315',
        stock: 8
      },
      {
        color: 'black',
        value: '#000000',
        stock: 9
      }
    ],
    sizes: [],
    colors: ['brown', 'black'],
    rating: 4.1,
    discount: 15,
    timeStamp: new Date().toUTCString(),
    quantitySold: 52,
    additionalInformation: 'No additional information',
    reviews: [
      {
        id: 'RW1',
        name: 'John Doe',
        comment: `Love these chairs, they look beautiful and match our light wood kitchen perfectly.
      They are super comfortable and very sturdy. The swivel is excellent, and I could sit in them all day.
      There is a bit of variation in the firmness of the cushions. One of the chairs has a really firm cushion.`,
        rating: 5,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW2',
        name: 'Allison Baker',
        comment: `I love these countertop height stools more every day! They are so comfortable, sturdy,
      fit perfectly into my decor, and I also enjoy the effortless swivel.`,
        rating: 4,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW3',
        name: 'Julia Baker',
        comment: `These are super comfy and the swivel feature glides smoothly!`,
        rating: 5,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW4',
        name: 'Julia Baker',
        comment: `This is a great stool. Excellent price. It’s quite comfortable and good looking. Swivels nicely. My disappointment is in the color.
      The sand color is quite dark—even if it doesn’t look that way in pics. I was hoping for more of a natural, off white and this color doesn’t
       work in my kitchen. I kept it for another spot in my home. But wished it had worked in kitchen. Please offer an off white.`,
        rating: 4,
        timeStamp: new Date().toUTCString()
      }
    ]
  },
  {
    id: 'SS009',
    type: 'living-room',
    category: 'bar stool',
    name: 'Carly Counter & Bar Stool',
    shortDescription: 'Stylish Bar Stool',
    description: `Refresh your space with our upholstered bar and counter stool.
                  Luxe velvet with diamond tufting adds texture, while tapered legs in a sleek black
                  hue add an edgy touch. Plus, this chair comes in a range of color options and features
                  a built-in footrest for added support.`,
    price: 250,
    image: carlyCounterImg,
    images: [carlyCounterImg2, carlyCounterImg3, carlyCounterImg4, carlyCounterImg],
    list: [
      {
        color: 'blue velvet',
        value: '#1E222B',
        stock: 8
      },
      {
        color: 'brown velvet',
        value: '#7C4A39',
        stock: 9
      },
      {
        color: 'grey',
        value: '#282B2C',
        stock: 10
      },
      {
        color: 'amber velvet',
        value: '#978879',
        stock: 11
      }
    ],
    sizes: ['L', 'XL', 'XS'],
    colors: ['blue velvet', 'brown velvet', 'gray', 'light brown velvet'],
    rating: 4.6,
    discount: 10,
    timeStamp: new Date().toUTCString(),
    quantitySold: 38,
    additionalInformation: 'No additional information',
    reviews: [
      {
        id: 'RW1',
        name: 'John Doe',
        comment: `Love these chairs, they look beautiful and match our light wood kitchen perfectly.
      They are super comfortable and very sturdy. The swivel is excellent, and I could sit in them all day.
      There is a bit of variation in the firmness of the cushions. One of the chairs has a really firm cushion.`,
        rating: 5,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW2',
        name: 'Allison Baker',
        comment: `I love these countertop height stools more every day! They are so comfortable, sturdy,
      fit perfectly into my decor, and I also enjoy the effortless swivel.`,
        rating: 4,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW3',
        name: 'Julia Baker',
        comment: `These are super comfy and the swivel feature glides smoothly!`,
        rating: 5,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW4',
        name: 'Julia Baker',
        comment: `This is a great stool. Excellent price. It’s quite comfortable and good looking. Swivels nicely. My disappointment is in the color.
      The sand color is quite dark—even if it doesn’t look that way in pics. I was hoping for more of a natural, off white and this color doesn’t
       work in my kitchen. I kept it for another spot in my home. But wished it had worked in kitchen. Please offer an off white.`,
        rating: 4,
        timeStamp: new Date().toUTCString()
      }
    ]
  },
  {
    id: 'SS010',
    type: 'kitchen',
    category: 'bar stool',
    name: 'Radcliffe Counter Stool',
    shortDescription: 'Stylish Bar Stool',
    description: `Add an elegant, yet practical touch to your kitchen counter or home bar with this stool.
                  Upholstered in a neutral polyester-blend fabric, this wingback-style dining chair features clean lines
                  and a curved back that strikes a sophisticated silhouette.`,
    price: 320,
    image: radcliffeSwivelImg,
    images: [
      radcliffeSwivelImg2,
      radcliffeSwivelImg3,
      radcliffeSwivelImg4,
      radcliffeSwivelImg
    ],
    list: [
      {
        color: 'sand',
        value: '#F09B59',
        stock: 8
      },
      {
        color: 'pink',
        value: '#EF88BE',
        stock: 9
      },
      {
        color: 'gray',
        value: '#C0C0C0',
        stock: 10
      },
      {
        color: 'blue',
        value: '#3580BB',
        stock: 11
      }
    ],
    sizes: ['L', 'XL', 'XS'],
    colors: ['sand', 'pink', 'gray', 'blue'],
    rating: 4.5,
    discount: 10,
    timeStamp: new Date().toUTCString(),
    quantitySold: 18,
    additionalInformation: 'No additional information',
    reviews: [
      {
        id: 'RW1',
        name: 'John Doe',
        comment: `Love these chairs, they look beautiful and match our light wood kitchen perfectly.
      They are super comfortable and very sturdy. The swivel is excellent, and I could sit in them all day.
      There is a bit of variation in the firmness of the cushions. One of the chairs has a really firm cushion.`,
        rating: 5,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW2',
        name: 'Allison Baker',
        comment: `I love these countertop height stools more every day! They are so comfortable, sturdy,
      fit perfectly into my decor, and I also enjoy the effortless swivel.`,
        rating: 4,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW3',
        name: 'Julia Baker',
        comment: `These are super comfy and the swivel feature glides smoothly!`,
        rating: 5,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW4',
        name: 'Julia Baker',
        comment: `This is a great stool. Excellent price. It’s quite comfortable and good looking. Swivels nicely. My disappointment is in the color.
      The sand color is quite dark—even if it doesn’t look that way in pics. I was hoping for more of a natural, off white and this color doesn’t
       work in my kitchen. I kept it for another spot in my home. But wished it had worked in kitchen. Please offer an off white.`,
        rating: 4,
        timeStamp: new Date().toUTCString()
      }
    ]
  },
  {
    id: 'SS011',
    type: 'living-room',
    category: 'tables',
    name: 'Dorothea Dining Table',
    shortDescription: 'Stylish Bar Stool',
    description: `This table is a handcrafted dining table made from high-quality Indian hardwood,
                  which flaunts a sleek top that is circular in shape. The top is supported by an inverse pedestal
                  mounted on a semi-spherical base that has a ritzy look to it. It is polished in a brown tone or
                  charcoal gray with a natural wooden texture to it. Designed to seat four, the dining table is
                  a great choice that aligns with modern design styles.`,
    price: 3060,
    image: dorotheaRoundDiningTableImg,
    images: [
      dorotheaRoundDiningTableImg2,
      dorotheaRoundDiningTableImg3,
      dorotheaRoundDiningTableImg4,
      dorotheaRoundDiningTableImg
    ],
    list: [
      {
        color: 'brown',
        value: '#784315',
        stock: 8
      },
      {
        color: 'black',
        value: '#000000',
        stock: 9
      }
    ],
    sizes: [],
    colors: ['charcoal', 'brown'],
    rating: 3.8,
    discount: 0,
    timeStamp: new Date().toUTCString(),
    quantitySold: 28,
    additionalInformation: 'No additional information',
    reviews: [
      {
        id: 'RW1',
        name: 'John Doe',
        comment: `Love these chairs, they look beautiful and match our light wood kitchen perfectly.
      They are super comfortable and very sturdy. The swivel is excellent, and I could sit in them all day.
      There is a bit of variation in the firmness of the cushions. One of the chairs has a really firm cushion.`,
        rating: 5,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW2',
        name: 'Allison Baker',
        comment: `I love these countertop height stools more every day! They are so comfortable, sturdy,
      fit perfectly into my decor, and I also enjoy the effortless swivel.`,
        rating: 4,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW3',
        name: 'Julia Baker',
        comment: `These are super comfy and the swivel feature glides smoothly!`,
        rating: 5,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW4',
        name: 'Julia Baker',
        comment: `This is a great stool. Excellent price. It’s quite comfortable and good looking. Swivels nicely. My disappointment is in the color.
      The sand color is quite dark—even if it doesn’t look that way in pics. I was hoping for more of a natural, off white and this color doesn’t
       work in my kitchen. I kept it for another spot in my home. But wished it had worked in kitchen. Please offer an off white.`,
        rating: 4,
        timeStamp: new Date().toUTCString()
      }
    ]
  },
  {
    id: 'SS012',
    type: 'bedroom',
    category: 'tables',
    name: 'Chandice Dining Table',
    shortDescription: 'Stylish Bar Stool',
    description: `This dining table pairs slightly flared legs and a circular tabletop to give you a
                  clean-lined design that's easy to mix and match. It's made from a solid elm wood frame with a classic
                  bentwood design and a dark, rich finish that's warm and approachable. We love the tempered glass
                  tabletop, which is laid over natural cane for an airy element that pops set against the dark wood.`,
    price: 810,
    image: chandiceRoundDiningTableImg,
    images: [
      chandiceRoundDiningTableImg2,
      chandiceRoundDiningTableImg3,
      chandiceRoundDiningTableImg4,
      chandiceRoundDiningTableImg
    ],
    list: [
      {
        color: 'walnut',
        value: '#784315',
        stock: 8
      },
      {
        color: 'black',
        value: '#000000',
        stock: 9
      }
    ],
    sizes: [],
    colors: ['walnut', 'black'],
    rating: 4.1,
    discount: 15,
    timeStamp: new Date().toUTCString(),
    quantitySold: 12,
    additionalInformation: 'No additional information',
    reviews: [
      {
        id: 'RW1',
        name: 'John Doe',
        comment: `Love these chairs, they look beautiful and match our light wood kitchen perfectly.
      They are super comfortable and very sturdy. The swivel is excellent, and I could sit in them all day.
      There is a bit of variation in the firmness of the cushions. One of the chairs has a really firm cushion.`,
        rating: 5,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW2',
        name: 'Allison Baker',
        comment: `I love these countertop height stools more every day! They are so comfortable, sturdy,
      fit perfectly into my decor, and I also enjoy the effortless swivel.`,
        rating: 4,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW3',
        name: 'Julia Baker',
        comment: `These are super comfy and the swivel feature glides smoothly!`,
        rating: 5,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW4',
        name: 'Julia Baker',
        comment: `This is a great stool. Excellent price. It’s quite comfortable and good looking. Swivels nicely. My disappointment is in the color.
      The sand color is quite dark—even if it doesn’t look that way in pics. I was hoping for more of a natural, off white and this color doesn’t
       work in my kitchen. I kept it for another spot in my home. But wished it had worked in kitchen. Please offer an off white.`,
        rating: 4,
        timeStamp: new Date().toUTCString()
      }
    ]
  },
  {
    id: 'SS013',
    type: 'kitchen',
    category: 'bar stool',
    name: 'Carly Counter & Bar Stool',
    shortDescription: 'Stylish Bar Stool',
    description: `Refresh your space with our upholstered bar and counter stool.
                  Luxe velvet with diamond tufting adds texture, while tapered legs in a sleek black
                  hue add an edgy touch. Plus, this chair comes in a range of color options and features
                  a built-in footrest for added support.`,
    price: 250,
    image: carlyCounterImg,
    images: [carlyCounterImg2, carlyCounterImg3, carlyCounterImg4, carlyCounterImg],
    list: [
      {
        color: 'blue velvet',
        value: '#3282F6',
        stock: 8
      },
      {
        color: 'amber velvet',
        value: '#F08784',
        stock: 9
      },
      {
        color: 'gray',
        value: '#808080',
        stock: 10
      },
      {
        color: 'light brown velvet',
        value: '#8E403A',
        stock: 11
      }
    ],
    sizes: ['L', 'XL', 'XS'],
    colors: ['blue velvet', 'amber velvet', 'gray', 'light brown velvet'],
    rating: 4.6,
    discount: 10,
    timeStamp: new Date().toUTCString(),
    quantitySold: 63,
    additionalInformation: 'No additional information',
    reviews: [
      {
        id: 'RW1',
        name: 'John Doe',
        comment: `Love these chairs, they look beautiful and match our light wood kitchen perfectly.
      They are super comfortable and very sturdy. The swivel is excellent, and I could sit in them all day.
      There is a bit of variation in the firmness of the cushions. One of the chairs has a really firm cushion.`,
        rating: 5,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW2',
        name: 'Allison Baker',
        comment: `I love these countertop height stools more every day! They are so comfortable, sturdy,
      fit perfectly into my decor, and I also enjoy the effortless swivel.`,
        rating: 4,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW3',
        name: 'Julia Baker',
        comment: `These are super comfy and the swivel feature glides smoothly!`,
        rating: 5,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW4',
        name: 'Julia Baker',
        comment: `This is a great stool. Excellent price. It’s quite comfortable and good looking. Swivels nicely. My disappointment is in the color.
      The sand color is quite dark—even if it doesn’t look that way in pics. I was hoping for more of a natural, off white and this color doesn’t
       work in my kitchen. I kept it for another spot in my home. But wished it had worked in kitchen. Please offer an off white.`,
        rating: 4,
        timeStamp: new Date().toUTCString()
      }
    ]
  },
  {
    id: 'SS014',
    type: 'bedroom',
    category: 'bar stool',
    name: 'Radcliffe Counter Stool',
    shortDescription: 'Stylish Bar Stool',
    description: `Add an elegant, yet practical touch to your kitchen counter or home bar with this stool.
                  Upholstered in a neutral polyester-blend fabric, this wingback-style dining chair features clean lines
                  and a curved back that strikes a sophisticated silhouette.`,
    price: 320,
    image: radcliffeSwivelImg,
    images: [
      radcliffeSwivelImg2,
      radcliffeSwivelImg3,
      radcliffeSwivelImg4,
      radcliffeSwivelImg
    ],
    list: [
      {
        color: 'sand',
        value: '#F09B59',
        stock: 8
      },
      {
        color: 'pink',
        value: '#EF88BE',
        stock: 9
      },
      {
        color: 'gray',
        value: '#C0C0C0',
        stock: 10
      },
      {
        color: 'blue',
        value: '#3580BB',
        stock: 11
      }
    ],
    sizes: ['L', 'XL', 'XS'],
    colors: ['sand', 'pink', 'gray', 'blue'],
    rating: 4.5,
    discount: 10,
    timeStamp: new Date().toUTCString(),
    quantitySold: 25,
    additionalInformation: '',
    reviews: [
      {
        id: 'RW1',
        name: 'John Doe',
        comment: `Love these chairs, they look beautiful and match our light wood kitchen perfectly.
      They are super comfortable and very sturdy. The swivel is excellent, and I could sit in them all day.
      There is a bit of variation in the firmness of the cushions. One of the chairs has a really firm cushion.`,
        rating: 5,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW2',
        name: 'Allison Baker',
        comment: `I love these countertop height stools more every day! They are so comfortable, sturdy,
      fit perfectly into my decor, and I also enjoy the effortless swivel.`,
        rating: 4,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW3',
        name: 'Julia Baker',
        comment: `These are super comfy and the swivel feature glides smoothly!`,
        rating: 5,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW4',
        name: 'Julia Baker',
        comment: `This is a great stool. Excellent price. It’s quite comfortable and good looking. Swivels nicely. My disappointment is in the color.
      The sand color is quite dark—even if it doesn’t look that way in pics. I was hoping for more of a natural, off white and this color doesn’t
       work in my kitchen. I kept it for another spot in my home. But wished it had worked in kitchen. Please offer an off white.`,
        rating: 4,
        timeStamp: new Date().toUTCString()
      }
    ]
  },
  {
    id: 'SS015',
    type: 'kitchen',
    category: 'tables',
    name: 'Dorothea Dining Table',
    shortDescription: 'Stylish Bar Stool',
    description: `This table is a handcrafted dining table made from high-quality Indian hardwood,
                  which flaunts a sleek top that is circular in shape. The top is supported by an inverse pedestal
                  mounted on a semi-spherical base that has a ritzy look to it. It is polished in a brown tone or
                  charcoal gray with a natural wooden texture to it. Designed to seat four, the dining table is
                  a great choice that aligns with modern design styles.`,
    price: 3060,
    image: dorotheaRoundDiningTableImg,
    images: [
      dorotheaRoundDiningTableImg2,
      dorotheaRoundDiningTableImg3,
      dorotheaRoundDiningTableImg4,
      dorotheaRoundDiningTableImg
    ],
    list: [
      {
        color: 'charcoal',
        value: '#FFFE91',
        stock: 8
      },
      {
        color: 'brown',
        value: '#774342',
        stock: 9
      }
    ],
    sizes: [],
    colors: ['charcoal', 'brown'],
    rating: 3.8,
    discount: 0,
    timeStamp: new Date().toUTCString(),
    quantitySold: 20,
    additionalInformation: '',
    reviews: [
      {
        id: 'RW1',
        name: 'John Doe',
        comment: `Love these chairs, they look beautiful and match our light wood kitchen perfectly.
      They are super comfortable and very sturdy. The swivel is excellent, and I could sit in them all day.
      There is a bit of variation in the firmness of the cushions. One of the chairs has a really firm cushion.`,
        rating: 5,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW2',
        name: 'Allison Baker',
        comment: `I love these countertop height stools more every day! They are so comfortable, sturdy,
      fit perfectly into my decor, and I also enjoy the effortless swivel.`,
        rating: 4,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW3',
        name: 'Julia Baker',
        comment: `These are super comfy and the swivel feature glides smoothly!`,
        rating: 5,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW4',
        name: 'Julia Baker',
        comment: `This is a great stool. Excellent price. It’s quite comfortable and good looking. Swivels nicely. My disappointment is in the color.
      The sand color is quite dark—even if it doesn’t look that way in pics. I was hoping for more of a natural, off white and this color doesn’t
       work in my kitchen. I kept it for another spot in my home. But wished it had worked in kitchen. Please offer an off white.`,
        rating: 4,
        timeStamp: new Date().toUTCString()
      }
    ]
  },
  {
    id: 'SS016',
    type: 'living-room',
    category: 'tables',
    name: 'Chandice Dining Table',
    shortDescription: 'Stylish Bar Stool',
    description: `This dining table pairs slightly flared legs and a circular tabletop to give you a
                  clean-lined design that's easy to mix and match. It's made from a solid elm wood frame with a classic
                  bentwood design and a dark, rich finish that's warm and approachable. We love the tempered glass
                  tabletop, which is laid over natural cane for an airy element that pops set against the dark wood.`,
    price: 810,
    image: chandiceRoundDiningTableImg,
    images: [
      chandiceRoundDiningTableImg2,
      chandiceRoundDiningTableImg3,
      chandiceRoundDiningTableImg4,
      chandiceRoundDiningTableImg
    ],
    list: [
      {
        color: 'walnut',
        value: '#784315',
        stock: 8
      },
      {
        color: 'black',
        value: '#000000',
        stock: 9
      }
    ],
    sizes: [],
    colors: ['walnut', 'black'],
    rating: 4.1,
    discount: 15,
    timeStamp: new Date().toUTCString(),
    quantitySold: 36,
    additionalInformation: '',
    reviews: [
      {
        id: 'RW1',
        name: 'John Doe',
        comment: `Love these chairs, they look beautiful and match our light wood kitchen perfectly.
      They are super comfortable and very sturdy. The swivel is excellent, and I could sit in them all day.
      There is a bit of variation in the firmness of the cushions. One of the chairs has a really firm cushion.`,
        rating: 5,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW2',
        name: 'Allison Baker',
        comment: `I love these countertop height stools more every day! They are so comfortable, sturdy,
      fit perfectly into my decor, and I also enjoy the effortless swivel.`,
        rating: 4,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW3',
        name: 'Julia Baker',
        comment: `These are super comfy and the swivel feature glides smoothly!`,
        rating: 5,
        timeStamp: new Date().toUTCString()
      },
      {
        id: 'RW4',
        name: 'Julia Baker',
        comment: `This is a great stool. Excellent price. It’s quite comfortable and good looking. Swivels nicely. My disappointment is in the color.
      The sand color is quite dark—even if it doesn’t look that way in pics. I was hoping for more of a natural, off white and this color doesn’t
       work in my kitchen. I kept it for another spot in my home. But wished it had worked in kitchen. Please offer an off white.`,
        rating: 4,
        timeStamp: new Date().toUTCString()
      }
    ]
  }
]
