import { Routes, Route } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import Division from './pages/Division'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<Division />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
