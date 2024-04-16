import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import logoImage from '../assets/Meubel_House_Logos.png'
import CartIcon from './Icons/CartIcon'
import MyAccountIcon from './Icons/MyAccountIcon'
import WishlistIcon from './Icons/WishlistIcon'
import SearchIcon from './Icons/SearchIcon'
import { CartContext } from '../state/CartContext'

import classes from './MainNavigation.module.scss'

function MainNavigation() {
  const { totalQuantity } = useContext(CartContext)
  return (
    <header className={classes.header}>
      <nav>
        <div className={classes['logo-container']}>
          <img src={logoImage} alt="Logo" />
          <h2 className={classes['logo-text']}>URBANNEST</h2>
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
                Produse
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? classes.active : undefined)}
              >
                Inspiră-te
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
            <NavLink to="/authentication">
              <MyAccountIcon />
            </NavLink>
            <SearchIcon />
            <NavLink to="/favorites">
              <WishlistIcon />
            </NavLink>

            <div className={classes.cart}>
              <NavLink to="/cart">
                <CartIcon />
              </NavLink>
              {totalQuantity > 0 && (
                <span className={classes['cart-quantity']}>{totalQuantity}</span>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default MainNavigation
