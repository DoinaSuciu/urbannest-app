import { useState, useContext, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProducts } from '../state/ProductsContext'
import { FavoritesContext } from '../state/FavoritesContext'
import Carousel from 'nuka-carousel'
import ProductCard from '../components/ProductCard'
import Button from '../components/Button'
import bannerImg from '../assets/banner-img.jpg'
import classes from './HomePage.module.scss'
import diningRoomImg from '../assets/room-types/dining-room.png'
import livingRoomImg from '../assets/room-types/living-room.png'
import bedroomImg from '../assets/room-types/bedroom.png'
import roomsInspirationImg from '../assets/rooms-inspiration/rooms-inspiration-1.png'
import roomsInspirationCarouselImg from '../assets/rooms-inspiration/rooms-inspiration-2.png'
import roomsInspirationCarouselImg2 from '../assets/rooms-inspiration/rooms-inspiration-3.png'
import furniroRoomsPhoto from '../assets/furniro-furniture-design/furniro-rooms-photo-1.png'
import furniroRoomsPhoto2 from '../assets/furniro-furniture-design/furniro-rooms-photo-2.png'
import furniroRoomsPhoto3 from '../assets/furniro-furniture-design/furniro-rooms-photo-3.png'
import furniroRoomsPhoto4 from '../assets/furniro-furniture-design/furniro-rooms-photo-4.png'
import furniroRoomsPhoto5 from '../assets/furniro-furniture-design/furniro-rooms-photo-5.png'
import furniroRoomsPhoto6 from '../assets/furniro-furniture-design/furniro-rooms-photo-6.png'
import furniroRoomsPhoto7 from '../assets/furniro-furniture-design/furniro-rooms-photo-7.png'
import furniroRoomsPhoto8 from '../assets/furniro-furniture-design/furniro-rooms-photo-8.png'
import furniroRoomsPhoto9 from '../assets/furniro-furniture-design/furniro-rooms-photo-9.png'
import nextPage from '../assets/arrow-next.svg'
import helpers from '../styles/helpers.module.scss'

const HomePage = () => {
  const navigate = useNavigate()
  const { products } = useProducts()
  const { favoriteProductIds: favoritesProducts, toggleItem } =
    useContext(FavoritesContext)
  const shopNow = () => {
    navigate('/shop')
  }

  const isFavorite = useCallback(
    (id: string) => {
      const product = favoritesProducts.find((favoriteId) => favoriteId === id)
      return !!product
    },
    [favoritesProducts]
  )

  const [numberOfItemsShown, setNumberOfItemsToShown] = useState(8)
  const showMore = () => {
    if (numberOfItemsShown + 8 <= products.length) {
      setNumberOfItemsToShown(numberOfItemsShown + 8)
    } else {
      setNumberOfItemsToShown(products.length)
    }
  }

  return (
    <div className={classes['home-page']}>
      <div className={classes['banner-container']}>
        <img src={bannerImg} alt="banner" />
        <div className={classes['banner-text']}>
          <span>Nou</span>
          <h2 className={classes['banner-title']}>Mobilier Living</h2>
          <p>Descoperă cele mai noi piese de mobilier pentru living</p>
          <Button
            style={{ weight: 222, height: 74, fontSize: 16 }}
            type="button"
            onClick={shopNow}
            primaryColorButton
          >
            Cumpără acum
          </Button>
        </div>
      </div>

      <div className={classes['browse-the-range']}>
        <h2>Shop the look - Inspirație pentru acasă</h2>
        <p>Descoperă-le și inspirăte din selecția noastră.</p>
        <div className={classes['rooms-list']}>
          <div className={classes['room-type']}>
            <img src={diningRoomImg} alt="Dining" />
            <h3>Dining</h3>
          </div>
          <div className={classes['room-type']}>
            <img src={livingRoomImg} alt="Living" />
            <h3>Living</h3>
          </div>
          <div className={classes['room-type']}>
            <img src={bedroomImg} alt="Bedroom" />
            <h3>Dormitor</h3>
          </div>
        </div>
      </div>

      <div className={classes['our-products']}>
        <h2>Produsele noastre</h2>
        <ul>
          {products.slice(0, numberOfItemsShown).map((product) => (
            <ProductCard
              id={product.id}
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              shortDescription={product.shortDescription}
              discount={product.discount}
              isFavorite={isFavorite(product.id)}
              toggleFavorite={toggleItem}
            />
          ))}
        </ul>

        <Button
          style={{ weight: 245, height: 48, fontSize: 16 }}
          type="button"
          onClick={showMore}
          primaryColorButton={false}
        >
          Arată mai multe
        </Button>
      </div>

      <div className={classes['beautiful-rooms']}>
        <div>
          <h2>Găsește-ți inspirația în funcție de stil</h2>
          <p>
            Preferi stilul modern sau clasic? Te impresionează un decor natural spirit sau
            mai degrabă unul romantic? Descoperă idei de amenajare în funcție de stilul
            tău preferat.
          </p>
          <button>Descoperă mai multe</button>
        </div>
        <div className={classes['bedroom-inspiration']}>
          <img src={roomsInspirationImg} alt="Bed room design" />
          <div
            className={`${helpers.flex} ${helpers.absolute} 'bedroom-inspiration-description`}
          >
            <div className={classes['bedroom-inspiration-short-text']}>
              <p>01 - Dormitor</p>
              <h3>Spațiu propriu</h3>
            </div>
            <button>
              <img src={nextPage} alt="next page" />
            </button>
          </div>
        </div>
        <div className={classes.slideShow}>
          <Carousel>
            <img src={roomsInspirationCarouselImg2} alt="Rooms inspiration" />
            <img src={roomsInspirationCarouselImg} alt="Rooms inspiration" />
            <img src={roomsInspirationCarouselImg2} alt="Rooms inspiration" />
          </Carousel>
        </div>
      </div>

      <div className={classes['furniro-furniture-photos']}>
        <p>Împărtășește experiența cu</p>
        <h2>#FurniroFurniture</h2>
        <div className={classes['furniro-rooms-photos']}>
          <img className={classes.image1} src={furniroRoomsPhoto} alt="room design" />
          <img className={classes.image2} src={furniroRoomsPhoto3} alt="room design" />
          <img className={classes.image3} src={furniroRoomsPhoto5} alt="room design" />
          <img className={classes.image4} src={furniroRoomsPhoto4} alt="room design" />
          <img className={classes.image5} src={furniroRoomsPhoto2} alt="room design" />
          <img className={classes.image6} src={furniroRoomsPhoto6} alt="room design" />
          <img className={classes.image7} src={furniroRoomsPhoto7} alt="room design" />
          <img className={classes.image8} src={furniroRoomsPhoto8} alt="room design" />
          <img className={classes.image9} src={furniroRoomsPhoto9} alt="room design" />
        </div>
      </div>
    </div>
  )
}

export default HomePage
