import './App.css'
import Tavbar from './components/Tavbar'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Tavbar/></>
    },
    {
      path:"/about",
      element:<><About/></>
    },
    {
      path:"/contact",
      element:<><Contact/></>
    },
    {
      path:"/home",
      element:<><Home/></>
    },

     
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
