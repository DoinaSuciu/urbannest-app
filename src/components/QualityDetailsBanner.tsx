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
          <h2>Calitate înaltă</h2>
          <p>Din materiale de top</p>
        </div>
      </div>
      <div className={classes.container}>
        <GuaranteeIcon />
        <div>
          <h2>Garanție garantată</h2>
          <p>Peste 2 ani</p>
        </div>
      </div>
      <div className={classes.container}>
        <ShippingIcon />
        <div>
          <h2>Livrare gratuită</h2>
          <p>La comenzi de peste 150$</p>
        </div>
      </div>
      <div className={classes.container}>
        <CustomerSupportIcon />
        <div>
          <h2>Suport 24 / 7</h2>
          <p>Suport dedicat</p>
        </div>
      </div>
    </div>
  )
}

export default QualityDetailsBanner
