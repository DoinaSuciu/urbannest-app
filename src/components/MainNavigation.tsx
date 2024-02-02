import { NavLink } from 'react-router-dom'
import logoImage from '../assets/Meubel_House_Logos.png'
import CartIcon from './Icons/CartIcon'
import MyAccountIcon from './Icons/MyAccountIcon'
import WishlistIcon from './Icons/WishlistIcon'
import SearchIcon from './Icons/SearchIcon'

import classes from './MainNavigation.module.scss'

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <div className={classes['logo-container']}>
          <img src={logoImage} alt="Logo" />
          <h2 className={classes['logo-text']}>furniro.</h2>
        </div>

        <div>
          <ul className={classes.list}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? classes.active : undefined)}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) => (isActive ? classes.active : undefined)}
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? classes.active : undefined)}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? classes.active : undefined)}
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <div className={classes['icons-nav']}>
            <MyAccountIcon />
            <SearchIcon />
            <WishlistIcon />
            <NavLink to="/cart">
              <CartIcon />
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default MainNavigation
