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
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import Callback from './pages/Callback/Callback'
import { Slide, Typography } from '@mui/material'
import useStore from './state/store'
import CustomSnackbar from './components/Custom/CustomSnackbar/CustomSnackbar'

function App() {
  // GETTING GLOBAL STATES
  const { globalAlert, resetGlobalAlert } = useStore()

  return (
    <>
    <CustomSnackbar
        open={globalAlert !== null}
        autoHideDuration={1750}
        TransitionComponent={Slide}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        onClose={resetGlobalAlert}
        message={
          globalAlert && <>
            <Typography
              componnt="span"
              variant="body1"
              sx={{ fontSize: '15px' }}
            >
              {globalAlert.message}
            </Typography>
          </>
        }
      />
    <Routes>
        {/* GENERAL ROUTES */}
      <Route path="/" element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path='terms' element={<ToSPage />} />
      <Route path="privacy" element={<PrivacyPage />} />
      <Route path="callback" element={<Callback />} />

      <Route element={AppLayout}>
        {/* ROADMAP ROUTES */}
        <Route path='roadmaps' element={<RoadmapsPage />} />
        <Route path="/roadmap">
          <Route 
            path="template/:id" 
            element={<RoadmapPage />} />
          <Route
            path=":id" 
            element={<ProtectedRoute>
              <RoadmapPage />
            </ProtectedRoute>} />
          <Route 
            path="create" 
            element={<ProtectedRoute>
              <CreateRoadmapPage />
            </ProtectedRoute>} />
          <Route 
            path="edit/:id" 
            element={<ProtectedRoute>
              <EditRoadmapPage />
            </ProtectedRoute>} />
        </Route>
        
        {/* TOKEN ROUTES */}
        <Route 
          path='tokens' 
          element={
            <ProtectedRoute>
              <TokensPage />
            </ProtectedRoute>} />
        <Route path='token'>
          <Route 
            path="create" 
            element={<ProtectedRoute>
              <CreateTokenPage />
            </ProtectedRoute>} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    </>
  )
}

export default App
