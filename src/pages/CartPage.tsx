import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import QualityDetailsBanner from '../components/QualityDetailsBanner'
import classes from './CartPage.module.scss'
import { CartContext } from '../state/CartContext'
import BaseBanner from '../components/BaseBanner'
import emptyCartImg from '../assets/empty-cart-svgrepo-com.svg'
import Button from '../components/Button'
import removeFromCartIcon from '../assets/remove-from-cart-icon.svg'

function CartPage() {
  const { items, totalAmount, incrementQuantity, decrementQuantity, removeItem } =
    useContext(CartContext)
  const navigate = useNavigate()

  function goToShoppingPage() {
    navigate('/shop')
  }

  return (
    <div className={classes['cart-page']}>
      <BaseBanner title="Cart" fromPage="Home" toPage="Cart" />

      {items.length === 0 && (
        <div className={classes['empty-cart-container']}>
          <img src={emptyCartImg} alt="Empty cart" />
          <h2>Your cart is empty</h2>

          <p>Looks like you have not added anything to your cart.</p>
          <Button
            style={{
              weight: 100,
              height: 50,
              fontSize: 16,
              borderRadius: 10,
              marginTop: 30
            }}
            type="button"
            onClick={goToShoppingPage}
            primarColorButton
          >
            Go shopping
          </Button>
        </div>
      )}

      {items.length > 0 && (
        <div className={classes['cart-with-products']}>
          <div className={classes['cart-list']}>
            <span className={`${classes.box} ${classes.header}`}>Product</span>
            <span className={`${classes.box} ${classes.header}`}>Price</span>
            <span className={`${classes.box} ${classes.header}`}>Quantity</span>
            <span className={`${classes.box} ${classes.header}`}>Subtotal</span>

            {items.map((item) => (
              <div key={item.id} className={classes['grid-row']}>
                <div className={`${classes.box} ${classes['item-name']}`}>
                  <img src={item.image} alt={item.name} />
                  <span>{item.name}</span>
                </div>
                <div className={classes.box}>$ {item.price}</div>
                <div className={classes['quantity-adjust']}>
                  <button
                    className={classes.decrement}
                    onClick={() => decrementQuantity(item.id)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className={classes.increment}
                    onClick={() => incrementQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
                <div className={classes.box}>
                  <span>$ {item.quantity * item.price}</span>

                  <button
                    className={classes['remove-from-cart']}
                    onClick={() => removeItem(item.id)}
                  >
                    <img src={removeFromCartIcon} alt="remove from cart" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className={classes['total-container']}>
            <h2>Cart Totals</h2>
            <div className={classes['total-row']}>
              <span className={classes['row-header']}>Subtotal</span>
              <span className={classes.subtotal}>$ {totalAmount}</span>
            </div>
            <div className={classes['total-row']}>
              <span className={classes['row-header']}>Shipping</span>
              <p className={classes.shipping}>
                Shipping costs will be calculated once you have provided address.
              </p>
            </div>
            <div className={classes['total-row']}>
              <span className={classes['row-header']}>Total</span>
              <span className={classes.total}>$ {totalAmount}</span>
            </div>
            <Button
              primarColorButton
              style={{
                fontSize: 20,
                borderRadius: 15,
                padding: '14px 59px',
                backgroundColor: '#f9f1e7',
                border: '1px solid black',
                fontFamily: 'Poppins',
                color: 'black',
                textTransform: 'none'
              }}
              type="button"
              onClick={goToShoppingPage}
            >
              Check Out
            </Button>
          </div>
        </div>
      )}
      <QualityDetailsBanner />
    </div>
  )
}

export default CartPage
