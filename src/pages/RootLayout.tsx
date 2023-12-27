import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'
import MainFooter from '../components/MainFooter'
import classes from './RootLayout.module.scss'

function RootLayout() {
  return (
    <div className={classes.container}>
      <MainNavigation />
      <main className={classes.main}>
        <Outlet />
      </main>
      <MainFooter />
    </div>
  )
}

export default RootLayout
