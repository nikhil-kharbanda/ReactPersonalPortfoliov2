/* src/App.js */

import './App.scss';
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import PrevJobs from './components/Jobs';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="education" element={<Education />} />
          <Route path="previous-jobs" element={<PrevJobs />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
