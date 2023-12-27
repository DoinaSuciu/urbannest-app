import { Link } from 'react-router-dom'
import classes from './MainFooter.module.scss'

const MainFooter = () => {
  return (
    <footer>
      <div className={classes['main-container']}>
        <section className={classes.details}>
          <h3>furniro.</h3>
          <p className={classes.address}>
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </section>
        <section className={classes.links}>
          <span className={classes['section-name']}>Links</span>
          <Link to="/">
            <h4>Home</h4>
          </Link>
          <Link to="/about">
            <h4>About</h4>
          </Link>
          <Link to="/shop">
            <h4>Shop</h4>
          </Link>
          <Link to="/contact">
            <h4>Contact</h4>
          </Link>
        </section>

        <section className={classes.help}>
          <span className={classes['section-name']}>Help</span>
          <Link to="">
            <h4>Payment Options</h4>
          </Link>
          <Link to="">
            <h4>Returns</h4>
          </Link>
          <Link to="">
            <h4>Privacy Policies</h4>
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
        <p>2023 furniro. All rights reserved</p>
      </div>
    </footer>
  )
}

export default MainFooter
