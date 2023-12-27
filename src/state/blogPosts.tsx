import { BlogType } from '../models/BlogType'
import image01 from '../assets/blog-images/blog-image-1.jpg'
import image02 from '../assets/blog-images/blog-image-2.jpg'
import image03 from '../assets/blog-images/blog-image-3.jpg'
import image04 from '../assets/blog-images/blog-image-4.jpg'
import image05 from '../assets/blog-images/blog-image-6.jpg'

export const BlogCategories: { id: string; name: string }[] = [
  {
    id: 'BC001',
    name: 'Crafts'
  },
  {
    id: 'BC002',
    name: 'Design'
  },
  {
    id: 'BC003',
    name: 'Handmade'
  },
  {
    id: 'BC004',
    name: 'Interior'
  },
  {
    id: 'BC005',
    name: 'Wood'
  }
]

export const BlogPosts: BlogType[] = [
  {
    id: 'BP01',
    title: 'Going all-in with millennial design',
    description: `The following post is brought to you by and the. Our partners are hand picked by the Design Milk team because
     they represent the best in design. Just as Lexus went all in on their new sport sedan, the designers featured here go
     all in on their passion.`,
    contentOne: `One doesn't normally evoke the worlds of interior design and professional basketball in the same breath, but there's undeniably a bit
    of the Kobe Bryant story in Ryan Saghian's path. Just as Kobe was a young star who went straight from high school to playing professionally
    in the NBA, Ryan was also very young when he made the leap to starting his own design studio. Today the 28-year old Angeleno stands as both
    a young talent and an established name/brand unto himself, the embodiment of an all-in ethos now sought for his masterful ability to marry
    Old Hollywood glamor with an energized Millennial modernity in rooms exuding an authentic lived-in atmosphere. Like his immortalized hoops
    counterpart, Saghian's journey toward fame and success within the design industry follows an unconventional path.

    Similar to the late iconoclast, Saghian would proclaim his intent to become a designer early on, exuding a rare and intense passion that
    belied his age. “I was lucky enough to know what I wanted to do at a very early age and wasted no time getting started,” he admits.

    Similar to the late iconoclast, Saghian would proclaim his intent to become a designer early on, exuding a rare and intense passion that belied his age.
    “I was lucky enough to know what I wanted to do at a very early age and wasted no time getting started,” he admits.`,
    contentTwo: `While most 15-year olds have yet to plot a course toward college – let alone the semblance of a career path – a young Saghian began working
    at Los Angeles award-winning firm, Woodson & Rummerfield House of Design as an intern throughout high school before enrolling at the Art Institute of
    California where he would graduate with a degree in Interior Architecture. Young designers are typically expected to toil under the tutelage of senior
    talent for several years, to gain experience but also abide by an industry that expects youth to pay dues.
    Saghian would instead push all of his chips into the game in his early twenties, launching his own design studio, Ryan Saghian Interiors, from his parent’s garage.
    He would quickly outgrow those salad days, leveraging social media to build up interest and eventually securing enough work to turn a dream into a profitable reality.`,
    contentThree: `With an eye adept for tailoring opulence beyond superficial extravagance, Saghian’s work encapsulates everything from furnishings, wall treatments and rugs
    of his own design, including a signature scent inspired by a favorite childhood memory revived in scented candle form. This emotional memory is consistent throughout Saghian’s
    work, whether designing a space or an object.
    “My approach to design is all about feeling. Creativity comes from the heart, it’s intuitive,” explains Saghian, “I create spaces that are pouring with self-expression, and that’s
    the identifiable Ryan Saghian experience.”
    Ryan Saghian Home is arguably the designer’s purest expression of his vision of “infusing classic DNA into contemporary pieces” – a home collection inspired by his travels and excursions
    rummaging through countless thrift stores, flea markets and trading posts. “My dream has always been to design as many beautiful homes as possible, and with my own line of furnishings,
    wallpaper, dinnerware and more, people all over the country and world can have a bit of my design to enhance their space.”
    The confidently modern designer, one unapologetically devout to his own bold and sumptuous vision of the good life, has aspirations to one day apply his signature style beyond a rug,
    room or even across a residence. “I want to dive into hospitality. Could you imagine a Ryan Saghian designed hotel, restaurant or bar? A DREAM!”
    `,
    image: image01,
    date: '2021-01-01',
    category: 'Wood',
    writer: 'Admin'
  },
  {
    id: 'BP02',
    title: 'Exploring new ways of decorating',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at
    ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis
    nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod
    elementum.`,
    contentOne: `One doesn't normally evoke the worlds of interior design and professional basketball in the same breath, but there's undeniably a bit
    of the Kobe Bryant story in Ryan Saghian's path. Just as Kobe was a young star who went straight from high school to playing professionally
    in the NBA, Ryan was also very young when he made the leap to starting his own design studio. Today the 28-year old Angeleno stands as both
    a young talent and an established name/brand unto himself, the embodiment of an all-in ethos now sought for his masterful ability to marry
    Old Hollywood glamor with an energized Millennial modernity in rooms exuding an authentic lived-in atmosphere. Like his immortalized hoops
    counterpart, Saghian's journey toward fame and success within the design industry follows an unconventional path.

    Similar to the late iconoclast, Saghian would proclaim his intent to become a designer early on, exuding a rare and intense passion that
    belied his age. “I was lucky enough to know what I wanted to do at a very early age and wasted no time getting started,” he admits.

    Similar to the late iconoclast, Saghian would proclaim his intent to become a designer early on, exuding a rare and intense passion that belied his age.
    “I was lucky enough to know what I wanted to do at a very early age and wasted no time getting started,” he admits.`,
    contentTwo: `One doesn't normally evoke the worlds of interior design and professional basketball in the same breath, but there's undeniably a bit
    of the Kobe Bryant story in Ryan Saghian's path. Just as Kobe was a young star who went straight from high school to playing professionally
    in the NBA, Ryan was also very young when he made the leap to starting his own design studio. Today the 28-year old Angeleno stands as both
    a young talent and an established name/brand unto himself, the embodiment of an all-in ethos now sought for his masterful ability to marry
    Old Hollywood glamor with an energized Millennial modernity in rooms exuding an authentic lived-in atmosphere. Like his immortalized hoops
    counterpart, Saghian's journey toward fame and success within the design industry follows an unconventional path.

    Similar to the late iconoclast, Saghian would proclaim his intent to become a designer early on, exuding a rare and intense passion that
    belied his age. “I was lucky enough to know what I wanted to do at a very early age and wasted no time getting started,” he admits.

    Similar to the late iconoclast, Saghian would proclaim his intent to become a designer early on, exuding a rare and intense passion that belied his age.
    “I was lucky enough to know what I wanted to do at a very early age and wasted no time getting started,” he admits.`,
    contentThree: `One doesn't normally evoke the worlds of interior design and professional basketball in the same breath, but there's undeniably a bit
    of the Kobe Bryant story in Ryan Saghian's path. Just as Kobe was a young star who went straight from high school to playing professionally
    in the NBA, Ryan was also very young when he made the leap to starting his own design studio. Today the 28-year old Angeleno stands as both
    a young talent and an established name/brand unto himself, the embodiment of an all-in ethos now sought for his masterful ability to marry
    Old Hollywood glamor with an energized Millennial modernity in rooms exuding an authentic lived-in atmosphere. Like his immortalized hoops
    counterpart, Saghian's journey toward fame and success within the design industry follows an unconventional path.

    Similar to the late iconoclast, Saghian would proclaim his intent to become a designer early on, exuding a rare and intense passion that
    belied his age. “I was lucky enough to know what I wanted to do at a very early age and wasted no time getting started,” he admits.

    Similar to the late iconoclast, Saghian would proclaim his intent to become a designer early on, exuding a rare and intense passion that belied his age.
    “I was lucky enough to know what I wanted to do at a very early age and wasted no time getting started,” he admits.`,
    image: image02,
    date: '2022-10-01',
    category: 'Handmade',
    writer: 'Admin'
  },
  {
    id: 'BP03',
    title: 'Handmade pieces that took time to make',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at
    ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis
    nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod
    elementum.`,
    contentOne: `One doesn't normally evoke the worlds of interior design and professional basketball in the same breath, but there's undeniably a bit
    of the Kobe Bryant story in Ryan Saghian's path. Just as Kobe was a young star who went straight from high school to playing professionally
    in the NBA, Ryan was also very young when he made the leap to starting his own design studio. Today the 28-year old Angeleno stands as both
    a young talent and an established name/brand unto himself, the embodiment of an all-in ethos now sought for his masterful ability to marry
    Old Hollywood glamor with an energized Millennial modernity in rooms exuding an authentic lived-in atmosphere. Like his immortalized hoops
    counterpart, Saghian's journey toward fame and success within the design industry follows an unconventional path.

    Similar to the late iconoclast, Saghian would proclaim his intent to become a designer early on, exuding a rare and intense passion that
    belied his age. “I was lucky enough to know what I wanted to do at a very early age and wasted no time getting started,” he admits.

    Similar to the late iconoclast, Saghian would proclaim his intent to become a designer early on, exuding a rare and intense passion that belied his age.
    “I was lucky enough to know what I wanted to do at a very early age and wasted no time getting started,” he admits.`,
    contentTwo: `One doesn't normally evoke the worlds of interior design and professional basketball in the same breath, but there's undeniably a bit
    of the Kobe Bryant story in Ryan Saghian's path. Just as Kobe was a young star who went straight from high school to playing professionally
    in the NBA, Ryan was also very young when he made the leap to starting his own design studio. Today the 28-year old Angeleno stands as both
    a young talent and an established name/brand unto himself, the embodiment of an all-in ethos now sought for his masterful ability to marry
    Old Hollywood glamor with an energized Millennial modernity in rooms exuding an authentic lived-in atmosphere. Like his immortalized hoops
    counterpart, Saghian's journey toward fame and success within the design industry follows an unconventional path.

    Similar to the late iconoclast, Saghian would proclaim his intent to become a designer early on, exuding a rare and intense passion that
    belied his age. “I was lucky enough to know what I wanted to do at a very early age and wasted no time getting started,” he admits.

    Similar to the late iconoclast, Saghian would proclaim his intent to become a designer early on, exuding a rare and intense passion that belied his age.
    “I was lucky enough to know what I wanted to do at a very early age and wasted no time getting started,” he admits.`,
    contentThree: `One doesn't normally evoke the worlds of interior design and professional basketball in the same breath, but there's undeniably a bit
    of the Kobe Bryant story in Ryan Saghian's path. Just as Kobe was a young star who went straight from high school to playing professionally
    in the NBA, Ryan was also very young when he made the leap to starting his own design studio. Today the 28-year old Angeleno stands as both
    a young talent and an established name/brand unto himself, the embodiment of an all-in ethos now sought for his masterful ability to marry
    Old Hollywood glamor with an energized Millennial modernity in rooms exuding an authentic lived-in atmosphere. Like his immortalized hoops
    counterpart, Saghian's journey toward fame and success within the design industry follows an unconventional path.

    Similar to the late iconoclast, Saghian would proclaim his intent to become a designer early on, exuding a rare and intense passion that
    belied his age. “I was lucky enough to know what I wanted to do at a very early age and wasted no time getting started,” he admits.

    Similar to the late iconoclast, Saghian would proclaim his intent to become a designer early on, exuding a rare and intense passion that belied his age.
    “I was lucky enough to know what I wanted to do at a very early age and wasted no time getting started,” he admits.`,
    image: image03,
    date: '2022-10-11',
    category: 'Wood',
    writer: 'Admin'
  },
  {
    id: 'BP04',
    title: 'Modern home in Milan',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at
    ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis
    nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod
    elementum.`,
    contentOne: `One doesn't normally evoke the worlds of interior design and professional basketball in the same breath, but there's undeniably a bit
    of the Kobe Bryant story in Ryan Saghian's path. Just as Kobe was a young star who went straight from high school to playing professionally
    in the NBA, Ryan was also very young when he made the leap to starting his own design studio. Today the 28-year old Angeleno stands as both
    a young talent and an established name/brand unto himself, the embodiment of an all-in ethos now sought for his masterful ability to marry
    Old Hollywood glamor with an energized Millennial modernity in rooms exuding an authentic lived-in atmosphere. Like his immortalized hoops
    counterpart, Saghian's journey toward fame and success within the design industry follows an unconventional path.

    Similar to the late iconoclast, Saghian would proclaim his intent to become a designer early on, exuding a rare and intense passion that
    belied his age. “I was lucky enough to know what I wanted to do at a very early age and wasted no time getting started,” he admits.

    Similar to the late iconoclast, Saghian would proclaim his intent to become a designer early on, exuding a rare and intense passion that belied his age.
    “I was lucky enough to know what I wanted to do at a very early age and wasted no time getting started,” he admits.`,
    contentTwo: `One doesn't normally evoke the worlds of interior design and professional basketball in the same breath, but there's undeniably a bit
    of the Kobe Bryant story in Ryan Saghian's path. Just as Kobe was a young star who went straight from high school to playing professionally
    in the NBA, Ryan was also very young when he made the leap to starting his own design studio. Today the 28-year old Angeleno stands as both
    a young talent and an established name/brand unto himself, the embodiment of an all-in ethos now sought for his masterful ability to marry
    Old Hollywood glamor with an energized Millennial modernity in rooms exuding an authentic lived-in atmosphere. Like his immortalized hoops
    counterpart, Saghian's journey toward fame and success within the design industry follows an unconventional path.

    Similar to the late iconoclast, Saghian would proclaim his intent to become a designer early on, exuding a rare and intense passion that
    belied his age. “I was lucky enough to know what I wanted to do at a very early age and wasted no time getting started,” he admits.

    Similar to the late iconoclast, Saghian would proclaim his intent to become a designer early on, exuding a rare and intense passion that belied his age.
    “I was lucky enough to know what I wanted to do at a very early age and wasted no time getting started,” he admits.`,
    contentThree: `One doesn't normally evoke the worlds of interior design and professional basketball in the same breath, but there's undeniably a bit
    of the Kobe Bryant story in Ryan Saghian's path. Just as Kobe was a young star who went straight from high school to playing professionally
    in the NBA, Ryan was also very young when he made the leap to starting his own design studio. Today the 28-year old Angeleno stands as both
    a young talent and an established name/brand unto himself, the embodiment of an all-in ethos now sought for his masterful ability to marry
    Old Hollywood glamor with an energized Millennial modernity in rooms exuding an authentic lived-in atmosphere. Like his immortalized hoops
    counterpart, Saghian's journey toward fame and success within the design industry follows an unconventional path.

    Similar to the late iconoclast, Saghian would proclaim his intent to become a designer early on, exuding a rare and intense passion that
    belied his age. “I was lucky enough to know what I wanted to do at a very early age and wasted no time getting started,” he admits.

    Similar to the late iconoclast, Saghian would proclaim his intent to become a designer early on, exuding a rare and intense passion that belied his age.
    “I was lucky enough to know what I wanted to do at a very early age and wasted no time getting started,” he admits.`,
    image: image04,
    date: '2022-10-11',
    category: 'Wood',
    writer: 'Admin'
  },
  {
    id: 'BP05',
    title: 'Colorful office redesign',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at
    ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis
    nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod
    elementum.`,
    contentOne: `One doesn't normally evoke the worlds of interior design and professional basketball in the same breath, but there's undeniably a bit
    of the Kobe Bryant story in Ryan Saghian's path. Just as Kobe was a young star who went straight from high school to playing professionally
    in the NBA, Ryan was also very young when he made the leap to starting his own design studio. Today the 28-year old Angeleno stands as both
    a young talent and an established name/brand unto himself, the embodiment of an all-in ethos now sought for his masterful ability to marry
    Old Hollywood glamor with an energized Millennial modernity in rooms exuding an authentic lived-in atmosphere. Like his immortalized hoops
    counterpart, Saghian's journey toward fame and success within the design industry follows an unconventional path.

    Similar to the late iconoclast, Saghian would proclaim his intent to become a designer early on, exuding a rare and intense passion that
    belied his age. “I was lucky enough to know what I wanted to do at a very early age and wasted no time getting started,” he admits.

    Similar to the late iconoclast, Saghian would proclaim his intent to become a designer early on, exuding a rare and intense passion that belied his age.
    “I was lucky enough to know what I wanted to do at a very early age and wasted no time getting started,” he admits.`,
    contentTwo: `One doesn't normally evoke the worlds of interior design and professional basketball in the same breath, but there's undeniably a bit
    of the Kobe Bryant story in Ryan Saghian's path. Just as Kobe was a young star who went straight from high school to playing professionally
    in the NBA, Ryan was also very young when he made the leap to starting his own design studio. Today the 28-year old Angeleno stands as both
    a young talent and an established name/brand unto himself, the embodiment of an all-in ethos now sought for his masterful ability to marry
    Old Hollywood glamor with an energized Millennial modernity in rooms exuding an authentic lived-in atmosphere. Like his immortalized hoops
    counterpart, Saghian's journey toward fame and success within the design industry follows an unconventional path.

    Similar to the late iconoclast, Saghian would proclaim his intent to become a designer early on, exuding a rare and intense passion that
    belied his age. “I was lucky enough to know what I wanted to do at a very early age and wasted no time getting started,” he admits.

    Similar to the late iconoclast, Saghian would proclaim his intent to become a designer early on, exuding a rare and intense passion that belied his age.
    “I was lucky enough to know what I wanted to do at a very early age and wasted no time getting started,” he admits.`,
    contentThree: `One doesn't normally evoke the worlds of interior design and professional basketball in the same breath, but there's undeniably a bit
    of the Kobe Bryant story in Ryan Saghian's path. Just as Kobe was a young star who went straight from high school to playing professionally
    in the NBA, Ryan was also very young when he made the leap to starting his own design studio. Today the 28-year old Angeleno stands as both
    a young talent and an established name/brand unto himself, the embodiment of an all-in ethos now sought for his masterful ability to marry
    Old Hollywood glamor with an energized Millennial modernity in rooms exuding an authentic lived-in atmosphere. Like his immortalized hoops
    counterpart, Saghian's journey toward fame and success within the design industry follows an unconventional path.

    Similar to the late iconoclast, Saghian would proclaim his intent to become a designer early on, exuding a rare and intense passion that
    belied his age. “I was lucky enough to know what I wanted to do at a very early age and wasted no time getting started,” he admits.

    Similar to the late iconoclast, Saghian would proclaim his intent to become a designer early on, exuding a rare and intense passion that belied his age.
    “I was lucky enough to know what I wanted to do at a very early age and wasted no time getting started,” he admits.`,
    image: image05,
    date: '2022-10-11',
    category: 'Wood',
    writer: 'Admin'
  }
]
