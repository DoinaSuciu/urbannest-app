import CustomerSupportIcon from './ContactIcons/CustomerSupportIcon'
import GuaranteeIcon from './ContactIcons/GuaranteeIcon'
import ShippingIcon from './ContactIcons/ShippingIcon'
import TrophyIcon from './ContactIcons/TrophyIcon'
import classes from './QualityDetailsBanner.module.scss'

const QualityDetailsBanner = () => {
  return (
    <div className={classes.qualityInfo}>
      <div className={classes.container}>
        <TrophyIcon />
        <div>
          <h2>High Quality</h2>
          <p>crafted from top materials</p>
        </div>
      </div>
      <div className={classes.container}>
        <GuaranteeIcon />
        <div>
          <h2>Warranty Protection</h2>
          <p>Over 2 years</p>
        </div>
      </div>
      <div className={classes.container}>
        <ShippingIcon />
        <div>
          <h2>Free Shipping</h2>
          <p>Order over 150 $</p>
        </div>
      </div>
      <div className={classes.container}>
        <CustomerSupportIcon />
        <div>
          <h2>24 / 7 Support</h2>
          <p>Dedicated support</p>
        </div>
      </div>
    </div>
  )
}

export default QualityDetailsBanner
