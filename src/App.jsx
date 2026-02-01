import { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import SubmissionsPage from './pages/SubmissionsPage'
import SubmitPage from './pages/SubmitPage'
import './index.css'

function App() {
  const [papers, setPapers] = useState([])

  useEffect(() => {
    // 1. Define the base URL
    const apiUrl = 'http://localhost:1337'
    console.log("Fetching from:", apiUrl);

    // 2. FETCH FROM THE CORRECT ENDPOINT
    // If your content type is 'Article', the endpoint is '/api/articles'
    axios.get(`${apiUrl}/api/articles`) 
      .then(response => {
        console.log("Success! Data fetched:", response.data.data);
        setPapers(response.data.data) 
      })
      .catch(error => {
        console.error("Error fetching articles:", error)
      })
  }, [])

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="grow">
          <Routes>
            <Route path="/" element={<HomePage papers={papers} />} />
            <Route path="/submissions" element={<SubmissionsPage />} />
            <Route path="/submit" element={<SubmitPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App