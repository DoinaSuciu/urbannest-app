import classes from './ContactPage.module.scss'
import helpers from '../styles/helpers.module.scss'
import AddressIcon from '../components/ContactIcons/AddressIcon'
import PhoneIcon from '../components/ContactIcons/PhoneIcon'
import WorkingTimeIcon from '../components/ContactIcons/WorkingTimeIcon'
import BaseForm from '../components/BaseForm'
import BaseBanner from '../components/BaseBanner'
import QualityDetailsBanner from '../components/QualityDetailsBanner'

const ContactPage = () => {
  return (
    <div className={classes['contact-page']}>
      <BaseBanner fromPage="Home" toPage="Contact" title="Contact" />

      <div className={classes.content}>
        <div className={classes.info}>
          <h2>Contactează-ne</h2>
          <p>
            Pentru mai multe informații despre produsele și serviciile noastre. Vă rugăm
            să nu ezitați să ne trimiteți un e-mail. Personalul nostru este întotdeauna
            aici pentru a vă ajuta. Nu ezita!
          </p>
        </div>

        <div className={`${helpers.flex} ${helpers['flex-between']}`}>
          <div className={classes['info-details']}>
            <div className={classes.detailContainer}>
              <AddressIcon width="30" height="30" />
              <div className={classes.details}>
                <h3>Adresa</h3>
                <p>
                  Chișinău, strada București nr.2 <br />
                  Republica Moldova
                </p>
              </div>
            </div>
            <div className={classes.detailContainer}>
              <PhoneIcon />
              <div className={classes.details}>
                <h3>Telefon</h3>
                <p>
                  068-28-00-22 <br />
                  022-02-02-02
                </p>
              </div>
            </div>
            <div className={classes.detailContainer}>
              <WorkingTimeIcon width="30" height="30" />
              <div className={classes.details}>
                <h3>Serviciul cu clienții</h3>
                <p>
                  Lun - Vin: 8:00 - 19:00 <br />
                  Sam: 9:00 - 15:00{' '}
                </p>
              </div>
            </div>
          </div>
          <BaseForm />
        </div>
      </div>
      <QualityDetailsBanner />
    </div>
  )
}

export default ContactPage
