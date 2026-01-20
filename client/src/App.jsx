import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from "./components/Sidebar"
import Home from "./pages/Home"
import Category from "./pages/Category"
import Article from "./pages/Article"

const App = () => {
  return (
    <div 
    className="flex min-h-screen
                    bg-linear-to-br
                    from-[#f18b8b]
                    via-[rgb(239,188,100)]
                    to-[#da4040]
                    relative
                    overflow-x-hidden
                    text-gray-100">
      <Sidebar />

      <main className="flex-1 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category" element={<Category />} />
          {/* Slug is a part of the URL which explains the page's content in user-friendly terms  */}
          <Route path="/articles/:slug" element={<Article />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
