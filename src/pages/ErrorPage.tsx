import { useRouteError, isRouteErrorResponse } from 'react-router-dom'
import PageContent from '../components/PageContent'
import MainNavigation from '../components/MainNavigation'

const ErrorPage: React.FC = () => {
  const error = useRouteError()

  let title = 'An error occurred!'
  let message = 'Something went wrong!'

  if (isRouteErrorResponse(error)) {
    if (error.status === 500) {
      message = error.data.message
    }

    if (error.status === 404) {
      title = '404  Not found!'
      message = 'Could not find resource or page.'
    }
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  )
}

export default ErrorPage
