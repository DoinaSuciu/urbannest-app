import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ProductsProvider } from './state/ProductsContext'
import RootLayout from './pages/RootLayout'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ShopPage from './pages/ShopPage'
import BlogsPage from './pages/BlogsPage'
import ProductPage from './pages/ProductPage'
import BlogPostPage from './pages/BlogPostPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: 'shop',
        element: <ShopPage />
      },
      {
        path: '/product-view/:productId',
        element: <ProductPage />
      },
      {
        path: 'contact',
        element: <ContactPage />
      },
      {
        path: 'blog',
        element: <BlogsPage />
      },
      {
        path: 'blog/:blogId',
        element: <BlogPostPage />
      }
    ]
  }
])

function App() {
  return (
    <ProductsProvider>
      <RouterProvider router={router} />
    </ProductsProvider>
  )
}
export default App
