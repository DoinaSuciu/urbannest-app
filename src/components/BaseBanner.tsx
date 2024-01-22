import { FC, memo } from 'react'
import classes from './BaseBanner.module.scss'
import helpers from '../styles/helpers.module.scss'
import bannerImg from '../assets/principal-banner-image.jpg'
import logo from '../assets/Meubel_House_Logos.png'
import arrowIcon from '../assets/arrow-icon.png'
import { Link } from 'react-router-dom'

type BaseBannerProps = {
  fromPage: string
  toPage: string
  title: string
}

const BaseBanner: FC<BaseBannerProps> = memo(function BaseBanner({
  title,
  fromPage,
  toPage
}: BaseBannerProps) {
  return (
    <div className={classes.banner}>
      <img className={classes.bannerImg} src={bannerImg} alt="banner" />
      <div className={classes.container}>
        <img className={classes.logo} src={logo} alt="logo" />
        <h1>{title}</h1>
        <div className={helpers['flex-center']}>
          <Link to="/">
            <span>{fromPage}</span>
          </Link>

          <img src={arrowIcon} alt="next page" />
          <span>{toPage}</span>
        </div>
      </div>
    </div>
  )
})

export default BaseBanner
