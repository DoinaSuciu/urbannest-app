import { Link } from 'react-router-dom'
import classes from './MainFooter.module.scss'

const MainFooter = () => {
  return (
    <footer>
      <div className={classes['main-container']}>
        <section className={classes.details}>
          <h3>URBANNEST</h3>
          <p className={classes.address}>Republica Moldova, Chișinău, str. București 2</p>
        </section>
        <section className={classes.links}>
          <span className={classes['section-name']}>Links</span>
          <Link to="/">
            <h4>Home</h4>
          </Link>
          <Link to="/about">
            <h4>Despre noi</h4>
          </Link>
          <Link to="/shop">
            <h4>Produse</h4>
          </Link>
          <Link to="/contact">
            <h4>Contact</h4>
          </Link>
        </section>

        <section className={classes.help}>
          <span className={classes['section-name']}>Informații</span>
          <Link to="">
            <h4>Opțiuni de plată</h4>
          </Link>
          <Link to="">
            <h4>Retururi</h4>
          </Link>
          <Link to="">
            <h4>Politica de confidențialitate</h4>
          </Link>
        </section>
        <section className={`${classes['section-name']} ${classes.newsletter}`}>
          <span>Newsletter</span>

          <div>
            <input type="text" placeholder="Enter Your Email Address" />
            <button>SUBSCRIBE</button>
          </div>
        </section>
      </div>
      <div className={classes.rights}>
        <p>2024 URBANNEST. All rights reserved</p>
      </div>
    </footer>
  )
}

export default MainFooter
