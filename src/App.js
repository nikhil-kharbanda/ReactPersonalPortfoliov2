import './App.scss';
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';
import DevProjects from './components/DevProjects';
import Education from './components/Education';
import EngineeringProject from './components/EngineeringProjects';
import PrevJobs from './components/Jobs';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="education" element={<Education />} />
          <Route path="development-projects" element={<DevProjects />} />
          <Route path="previous-jobs" element={<PrevJobs />} />
          <Route path="engineering-projects" element={<EngineeringProject />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
