import classes from './ContactPage.module.scss'
import helpers from '../styles/helpers.module.scss'
import AddressIcon from '../components/ContactIcons/AddressIcon'
import PhoneIcon from '../components/ContactIcons/PhoneIcon'
import WorkingTimeIcon from '../components/ContactIcons/WorkingTimeIcon'
import BaseForm from '../components/BaseForm'
import TrophyIcon from '../components/ContactIcons/TrophyIcon'
import GuaranteeIcon from '../components/ContactIcons/GuaranteeIcon'
import ShippingIcon from '../components/ContactIcons/ShippingIcon'
import CustomerSupportIcon from '../components/ContactIcons/CustomerSupportIcon'
import BaseBanner from '../components/BaseBanner'

const ContactPage = () => {
  return (
    <div className={classes['contact-page']}>
      <BaseBanner fromPage="Home" toPage="Contact" title="Contact" />

      <div className={classes.content}>
        <div className={classes.info}>
          <h2>Get In Touch WIth Us</h2>
          <p>
            For More Information About Our Product & Services. Please Feel Free To Drop Us
            An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        <div className={`${helpers.flex} ${helpers['flex-between']}`}>
          <div className={classes['info-details']}>
            <div className={classes.detailContainer}>
              <AddressIcon width="30" height="30" />
              <div className={classes.details}>
                <h3>Address</h3>
                <p>
                  1234 North Main Street New York, NY 22222 <br />
                  United States
                </p>
              </div>
            </div>
            <div className={classes.detailContainer}>
              <PhoneIcon />
              <div className={classes.details}>
                <h3>Phone</h3>
                <p>
                  1.800.555.6789 <br />
                  1.800.555.6789
                </p>
              </div>
            </div>
            <div className={classes.detailContainer}>
              <WorkingTimeIcon width="30" height="30" />
              <div className={classes.details}>
                <h3>Working Time</h3>
                <p>
                  Mon - Fri: 8:00 - 19:00 <br />
                  Sat: 9:00 - 15:00{' '}
                </p>
              </div>
            </div>
          </div>
          <BaseForm />
        </div>
      </div>

      <div className={classes.qualityInfo}>
        <div>
          <TrophyIcon />
          <div>
            <h2>High Quality</h2>
            <p>crafted from top materials</p>
          </div>
        </div>
        <div>
          <GuaranteeIcon />
          <div>
            <h2>Warranty Protection</h2>
            <p>Over 2 years</p>
          </div>
        </div>
        <div>
          <ShippingIcon />
          <div>
            <h2>Free Shipping</h2>
            <p>Order over 150 $</p>
          </div>
        </div>
        <div>
          <CustomerSupportIcon />
          <div>
            <h2>24 / 7 Support</h2>
            <p>Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
