import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from "./pages/Home"
import About from "./pages/About"
import Blogs from "./pages/Blogs"
import BlogsDetails from "./pages/BlogsDetails"
import PlacesRoute from "./pages/PlacesRoute"
import NoPage from "./pages/NoPage"
import Loaction from './pages/Loaction'
import { OrderPopupProvider } from './Hooks/OrderPopupProvider'
import "./App.css"

const App = () => {
  return (
    <OrderPopupProvider>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="blogs" element={<Blogs/>}/>
    <Route path="blogs/:id" element={<BlogsDetails/>}/>
    <Route path="places" element={<PlacesRoute/>}/>
    <Route path="location" element={<Loaction/>}/>
    <Route path="*" element={<NoPage/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
    </OrderPopupProvider>
  )
}

export default App
