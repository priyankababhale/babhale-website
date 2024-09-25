import './App.css'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Home, Contact , Services ,Portfolio} from './components'
import Layout from './Layout'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='service' element={<Services />} />
        <Route path='portfolio' element={<Portfolio />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App