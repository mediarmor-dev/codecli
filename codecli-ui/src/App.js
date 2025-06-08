import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Blog from "./pages/Blog";
import styles from "./App.module.css";

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <Sidebar />
        <main className={styles.mainContent}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
