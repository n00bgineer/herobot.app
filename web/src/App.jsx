import { Routes, Route } from 'react-router'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import ToS from './pages/ToS/ToS'
import Privacy from './pages/Privacy/Privacy'
import AppLayout from './layouts/AppLayout/AppLayout'
import Roadmap from './pages/Roadmap/Roadmap/Roadmap'
import Roadmaps from './pages/Roadmap/Roadmaps/Roadmaps'
import EditRoadmap from './pages/Roadmap/EditRoadmap/EditRoadmap'
import CreateRoadmap from './pages/Roadmap/CreateRoadmap/CreateRoadmap'
import Tokens from './pages/Token/Tokens/Tokens'
import CreateToken from './pages/Token/CreateToken/CreateToken'

function App() {
  return (
    <Routes>
        {/* GENERAL ROUTES */}
      <Route index element={Home}/>
      <Route path="about" element={About}/>
      <Route path='tos' element={ToS} />
      <Route path="privacy" element={Privacy} />

      <Route element={AppLayout}>
        {/* ROADMAP ROUTES */}
        <Route path='roadmaps' element={Roadmaps} />
        <Route path="roadmap">
          <Route path="/:id" element={Roadmap} />
          <Route path="create" element={CreateRoadmap} />
          <Route path="edit/:id" element={EditRoadmap} />
        </Route>
        
        {/* TOKEN ROUTES */}
        <Route path='tokens' element={Tokens} />
        <Route path='token'>
          <Route path="create" element={CreateToken} />
        </Route>
      </Route>

      <Route path="*" element={<div>404</div>} />
    </Routes>
  )
}

export default App
