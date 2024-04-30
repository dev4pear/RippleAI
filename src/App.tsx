import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import Header from './components/Header'
import Footer from './components/Footer'

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
