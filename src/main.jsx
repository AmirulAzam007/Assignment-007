import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './Layout/RootLayout'
import Timeline from './Pages/Timeline/Timeline'
import Stats from './Pages/Stats/Stats'
import NotFound from './Pages/NotFound/NotFound'
import Homepage from './Pages/Homepage/Homepage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path:"/Timeline",
        element: <Timeline></Timeline>
      },
      {
        path:"/Stats",
        element: <Stats></Stats>
      }
      
    ],
    errorElement: <NotFound></NotFound>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
