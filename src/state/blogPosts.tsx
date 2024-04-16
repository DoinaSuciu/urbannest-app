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
    name: 'Lemn'
  }
]

export const BlogPosts: BlogType[] = [
  {
    id: 'BP01',
    title: 'Mergând all-in cu design milenial',
    description: `Partenerii noștri sunt aleși manual de echipa Design Milk, deoarece reprezintă cel mai bun design. La fel cum Lexus s-a implicat în noul lor sedan sport, designerii prezentați aici își pun totul în pasiunea lor.`,
    contentOne: `În mod normal, nu evocă lumile designului interior și baschetul profesionist în aceeași suflare, dar există, fără îndoială, un pic din povestea lui Kobe Bryant în calea lui Ryan Saghian. Așa cum Kobe a fost o tânără vedetă care a trecut direct de la liceu pentru a juca profesionist în NBA, Ryan era și foarte tânăr când a făcut saltul spre a-și înființa propriul studio de design. Astăzi, Angeleno, în vârstă de 28 de ani, este atât un tânăr talent, cât și un nume/brand consacrat pentru el însuși, întruchiparea unui ethos all-in căutat acum pentru capacitatea sa magistrală de a căsători glamourul vechiului Hollywood cu o modernitate milenară energizantă în camere care emană un atmosferă autentică trăită. La fel ca omologul său imortalizat cu cercuri, călătoria lui Saghian către faimă și succes în industria designului urmează o cale neconvențională.

    Asemănător cu regretatul iconoclast, Saghian și-a proclamat intenția de a deveni designer de timpuriu, emanând o pasiune rară și intensă care îi contrazice vârsta. „Am fost destul de norocos să știu ce vreau să fac la o vârstă foarte fragedă și nu am pierdut timpul să încep”, recunoaște el.

     Asemănător cu regretatul iconoclast, Saghian și-a proclamat intenția de a deveni designer de timpuriu, emanând o pasiune rară și intensă care îi contrazice vârsta.
     „Am fost destul de norocos să știu ce vreau să fac la o vârstă foarte fragedă și nu am pierdut timpul să încep”, recunoaște el.`,
    contentTwo: `În timp ce majoritatea tinerilor de 15 ani încă nu au pus la cale un curs spre facultate – să nu mai vorbim de aparența unei cariere – un tânăr Saghian a început să lucreze la firma premiată din Los Angeles, Woodson & Rummerfield House of Design, ca stagiar pe tot parcursul liceului. înscriindu-se la Institutul de Artă din California unde avea să absolve o diplomă în arhitectură de interior. De obicei, se așteaptă ca tinerii designeri să muncească sub tutela talentelor seniori timp de câțiva ani, pentru a câștiga experiență, dar și pentru a respecta o industrie care așteaptă ca tinerii să plătească taxe. În schimb, Saghian și-a împins toate jetoanele în joc la începutul lui de 20 de ani, lansând propriul său studio de design, Ryan Saghian Interiors, din garajul părintelui său. El ar depăși rapid acele zile de salată, valorificând rețelele sociale pentru a crește interesul și, în cele din urmă, asigurând suficientă muncă pentru a transforma un vis într-o realitate profitabilă.`,
    contentThree: `Cu un ochi adept pentru a croi opulența dincolo de extravaganța superficială, munca lui Saghian încapsulează totul, de la mobilier, tratamente pentru pereți și covoare cu design propriu, inclusiv un parfum inspirat de o amintire preferată din copilărie reînviată sub formă de lumânare parfumată. Această memorie emoțională este consecventă de-a lungul lucrării lui Saghian, fie că proiectează un spațiu sau un obiect. „Abordarea mea față de design se referă la sentiment. Creativitatea vine din inimă, este intuitivă”, explică Saghian, „creez spații care se revarsă cu auto-exprimare, iar aceasta este experiența identificabilă Ryan Saghian.” Ryan Saghian Home este, fără îndoială, cea mai pură expresie a designerului a viziunii sale de „infuzare a ADN-ului clasic în piesele contemporane” – o colecție de casă inspirată de călătoriile și excursiile sale care scotocesc prin nenumărate magazine de second hand, piețe de vechituri și posturi comerciale. „Visul meu a fost întotdeauna să proiectez cât mai multe case frumoase posibil și, cu propria mea linie de mobilier, tapet, vesela și multe altele, oamenii din toată țara și din lume pot avea un pic din designul meu pentru a-și îmbunătăți spațiul.”
    Designerul modern încrezător, unul devotat fără scuze propriei viziuni îndrăznețe și somptuoase asupra vieții bune, are aspirații să-și aplice într-o zi stilul semnătură dincolo de un covor, cameră sau chiar peste o reședință. „Vreau să mă scufund în ospitalitate. Vă puteți imagina un hotel, restaurant sau bar proiectat de Ryan Saghian? UN VIS!"`,
    image: image01,
    date: '2021-01-01',
    category: 'Wood',
    writer: 'Admin'
  },
  {
    id: 'BP02',
    title: 'Explorând noi moduri de a decora',
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
