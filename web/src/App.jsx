import { Routes, Route } from 'react-router'
import AppLayout from './layouts/AppLayout/AppLayout'
import HomePage from './pages/HomePage/HomePage'
import ToSPage from './pages/ToSPage/ToSPage'
import PrivacyPage from './pages/PrivacyPage/PrivacyPage'
import AboutPage from './pages/AboutPage/AboutPage'
import RoadmapsPage from './pages/Roadmap/RoadmapsPage/RoadmapsPage'
import RoadmapPage from './pages/Roadmap/RoadmapPage/RoadmapPage'
import CreateRoadmapPage from './pages/Roadmap/CreateRoadmapPage/CreateRoadmapPage'
import EditRoadmapPage from './pages/Roadmap/EditRoadmapPage/EditRoadmapPage'
import TokensPage from './pages/TokensPage/TokensPage'
import CreateTokenPage from './pages/CreateTokenPage/CreateTokenPage'

function App() {
  return (
    <Routes>
        {/* GENERAL ROUTES */}
      <Route path="/" element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path='terms' element={<ToSPage />} />
      <Route path="privacy" element={<PrivacyPage />} />

      <Route element={AppLayout}>
        {/* ROADMAP ROUTES */}
        <Route path='roadmaps' element={<RoadmapsPage />} />
        <Route path="/roadmap">
          <Route path=":id" element={<RoadmapPage />} />
          <Route path="create" element={<CreateRoadmapPage />} />
          <Route path="edit/:id" element={<EditRoadmapPage />} />
        </Route>
        
        {/* TOKEN ROUTES */}
        <Route path='tokens' element={<TokensPage />} />
        <Route path='token'>
          <Route path="create" element={<CreateTokenPage />} />
        </Route>
      </Route>

      <Route path="*" element={<div>404</div>} />
    </Routes>
  )
}

export default App
