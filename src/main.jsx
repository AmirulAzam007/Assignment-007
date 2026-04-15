import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './Layout/RootLayout'
import Timeline from './Pages/Timeline/Timeline'
import Stats from './Pages/Stats/Stats'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/",
        element: <h2>Home</h2>,
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
    errorElement: <h2>This page is Not Found</h2>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
