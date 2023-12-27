import carlyCounterImg from '../assets/products/kitchen/bar-stools/carly-counter-bar-stool/Carly+Counter+&+Bar+Stool-1.webp'
import radcliffeSwivelImg from '../assets/products/kitchen/bar-stools/radcliffe-bar-stool/Radcliffe+Swivel+Counter+&+Bar+Stool-2.webp'
import dorotheaRoundDiningTableImg from '../assets/products/kitchen/tables/dorothea-round-dining-table/Dorothea+Round+Dining+Table-1.webp'
import chandiceRoundDiningTableImg from '../assets/products/kitchen/tables/chandice-round-dining-table/Chandice+Round+Dining+Table.webp'
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
    images: [],
    list: [
      {
        color: 'blue velvet',
        quantity: 8
      },
      {
        color: 'brown velvet',
        quantity: 9
      },
      {
        color: 'grey',
        quantity: 10
      },
      {
        color: 'light brown velvet',
        quantity: 11
      }
    ],
    sizes: [`26' Seat Height`, `30' Seat Height`],
    colors: ['blue velvet', 'brown velvet', 'gray', 'light brown velvet'],
    rating: 4.6,
    discount: 10,
    timeStamp: new Date().toUTCString(),
    quantitySold: 12
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
    images: [],
    list: [
      {
        color: 'brown',
        quantity: 8
      },
      {
        color: 'pink',
        quantity: 9
      },
      {
        color: 'grey',
        quantity: 10
      },
      {
        color: 'blue',
        quantity: 11
      }
    ],
    sizes: [`25.75' Seat Height`, `30' Seat Height`],
    colors: ['brown', 'pink', 'gray', 'blue'],
    rating: 4.5,
    discount: 10,
    timeStamp: new Date().toUTCString(),
    quantitySold: 69
  },
  {
    id: 'SS003',
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
    images: [],
    list: [
      {
        color: 'orange',
        quantity: 8
      },
      {
        color: 'brown',
        quantity: 9
      }
    ],
    sizes: [],
    colors: ['orange', 'brown'],
    rating: 3.8,
    discount: 0,
    timeStamp: new Date().toUTCString(),
    quantitySold: 35
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
    images: [],
    list: [
      {
        color: 'brown',
        quantity: 8
      },
      {
        color: 'black',
        quantity: 9
      }
    ],
    sizes: [],
    colors: ['brown', 'black'],
    rating: 4.1,
    discount: 15,
    timeStamp: new Date().toUTCString(),
    quantitySold: 46
  },
  {
    id: 'SS005',
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
    images: [],
    list: [
      {
        color: 'blue velvet',
        quantity: 8
      },
      {
        color: 'amber velvet',
        quantity: 9
      },
      {
        color: 'gray',
        quantity: 10
      },
      {
        color: 'light brown velvet',
        quantity: 11
      }
    ],
    sizes: [`26' Seat Height`, `30' Seat Height`],
    colors: ['blue velvet', 'amber velvet', 'gray', 'light brown velvet'],
    rating: 4.6,
    discount: 10,
    timeStamp: new Date().toUTCString(),
    quantitySold: 35
  },
  {
    id: 'SS006',
    type: 'kitchen',
    category: 'bar stool',
    name: 'Radcliffe Counter Stool',
    shortDescription: 'Stylish Bar Stool',
    description: `Add an elegant, yet practical touch to your kitchen counter or home bar with this stool.
                  Upholstered in a neutral polyester-blend fabric, this wingback-style dining chair features clean lines
                  and a curved back that strikes a sophisticated silhouette.`,
    price: 320,
    image: radcliffeSwivelImg,
    images: [],
    list: [
      {
        color: 'brown',
        quantity: 8
      },
      {
        color: 'pink',
        quantity: 9
      },
      {
        color: 'gray',
        quantity: 10
      },
      {
        color: 'blue',
        quantity: 11
      }
    ],
    sizes: [`25.75' Seat Height`, `30' Seat Height`],
    colors: ['brown', 'pink', 'gray', 'blue'],
    rating: 4.5,
    discount: 10,
    timeStamp: new Date().toUTCString(),
    quantitySold: 26
  },
  {
    id: 'SS007',
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
    images: [],
    list: [
      {
        color: 'orange',
        quantity: 8
      },
      {
        color: 'brown',
        quantity: 9
      }
    ],
    sizes: [],
    colors: ['orange', 'brown'],
    rating: 3.8,
    discount: 0,
    timeStamp: new Date().toUTCString(),
    quantitySold: 14
  },
  {
    id: 'SS008',
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
    images: [],
    list: [
      {
        color: 'brown',
        quantity: 8
      },
      {
        color: 'black',
        quantity: 9
      }
    ],
    sizes: [],
    colors: ['brown', 'black'],
    rating: 4.1,
    discount: 15,
    timeStamp: new Date().toUTCString(),
    quantitySold: 52
  },
  {
    id: 'SS009',
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
    images: [],
    list: [
      {
        color: 'blue velvet',
        quantity: 8
      },
      {
        color: 'brown velvet',
        quantity: 9
      },
      {
        color: 'grey',
        quantity: 10
      },
      {
        color: 'light brown velvet',
        quantity: 11
      }
    ],
    sizes: [`26' Seat Height`, `30' Seat Height`],
    colors: ['blue velvet', 'brown velvet', 'gray', 'light brown velvet'],
    rating: 4.6,
    discount: 10,
    timeStamp: new Date().toUTCString(),
    quantitySold: 38
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
    images: [],
    list: [
      {
        color: 'sand',
        quantity: 8
      },
      {
        color: 'pink',
        quantity: 9
      },
      {
        color: 'gray',
        quantity: 10
      },
      {
        color: 'blue',
        quantity: 11
      }
    ],
    sizes: [`25.75' Seat Height`, `30' Seat Height`],
    colors: ['sand', 'pink', 'gray', 'blue'],
    rating: 4.5,
    discount: 10,
    timeStamp: new Date().toUTCString(),
    quantitySold: 18
  },
  {
    id: 'SS011',
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
    images: [],
    list: [
      {
        color: 'charcoal',
        quantity: 8
      },
      {
        color: 'brown',
        quantity: 9
      }
    ],
    sizes: [],
    colors: ['charcoal', 'brown'],
    rating: 3.8,
    discount: 0,
    timeStamp: new Date().toUTCString(),
    quantitySold: 28
  },
  {
    id: 'SS012',
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
    images: [],
    list: [
      {
        color: 'walnut',
        quantity: 8
      },
      {
        color: 'black',
        quantity: 9
      }
    ],
    sizes: [],
    colors: ['walnut', 'black'],
    rating: 4.1,
    discount: 15,
    timeStamp: new Date().toUTCString(),
    quantitySold: 12
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
    images: [],
    list: [
      {
        color: 'blue velvet',
        quantity: 8
      },
      {
        color: 'amber velvet',
        quantity: 9
      },
      {
        color: 'gray',
        quantity: 10
      },
      {
        color: 'light brown velvet',
        quantity: 11
      }
    ],
    sizes: [`26' Seat Height`, `30' Seat Height`],
    colors: ['blue velvet', 'amber velvet', 'gray', 'light brown velvet'],
    rating: 4.6,
    discount: 10,
    timeStamp: new Date().toUTCString(),
    quantitySold: 63
  },
  {
    id: 'SS014',
    type: 'kitchen',
    category: 'bar stool',
    name: 'Radcliffe Counter Stool',
    shortDescription: 'Stylish Bar Stool',
    description: `Add an elegant, yet practical touch to your kitchen counter or home bar with this stool.
                  Upholstered in a neutral polyester-blend fabric, this wingback-style dining chair features clean lines
                  and a curved back that strikes a sophisticated silhouette.`,
    price: 320,
    image: radcliffeSwivelImg,
    images: [],
    list: [
      {
        color: 'sand',
        quantity: 8
      },
      {
        color: 'pink',
        quantity: 9
      },
      {
        color: 'gray',
        quantity: 10
      },
      {
        color: 'blue',
        quantity: 11
      }
    ],
    sizes: [`25.75' Seat Height`, `30' Seat Height`],
    colors: ['sand', 'pink', 'gray', 'blue'],
    rating: 4.5,
    discount: 10,
    timeStamp: new Date().toUTCString(),
    quantitySold: 25
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
    images: [],
    list: [
      {
        color: 'charcoal',
        quantity: 8
      },
      {
        color: 'brown',
        quantity: 9
      }
    ],
    sizes: [],
    colors: ['charcoal', 'brown'],
    rating: 3.8,
    discount: 0,
    timeStamp: new Date().toUTCString(),
    quantitySold: 20
  },
  {
    id: 'SS016',
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
    images: [],
    list: [
      {
        color: 'walnut',
        quantity: 8
      },
      {
        color: 'black',
        quantity: 9
      }
    ],
    sizes: [],
    colors: ['walnut', 'black'],
    rating: 4.1,
    discount: 15,
    timeStamp: new Date().toUTCString(),
    quantitySold: 36
  }
]
