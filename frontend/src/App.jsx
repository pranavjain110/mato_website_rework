import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ErrorBoundary from './components/ErrorBoundary'
import Home from './pages/Home'
import About from './pages/About'
import Infrastructure from './pages/Infrastructure'
import Products from './pages/Products'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={
              <div className="min-h-screen flex items-center justify-center p-8">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
                  <p className="text-gray-600 mb-4">The page you're looking for doesn't exist.</p>
                  <a href="/" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                    Go Home
                  </a>
                </div>
              </div>
            } />
          </Routes>
        </Layout>
      </Router>
    </ErrorBoundary>
  )
}

export default App
