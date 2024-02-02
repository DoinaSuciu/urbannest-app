import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'
import MainFooter from '../components/MainFooter'
import classes from './RootLayout.module.scss'
import ScrollToTop from '../components/ScrollToTop'

function RootLayout() {
  return (
    <div className={classes.container}>
      <ScrollToTop />
      <MainNavigation />
      <main className={classes.main}>
        <Outlet />
      </main>
      <MainFooter />
    </div>
  )
}

export default RootLayout
