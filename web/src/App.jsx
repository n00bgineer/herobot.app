import { Routes, Route } from 'react-router'
import AppLayout from './layouts/AppLayout/AppLayout'
import HomePage from './pages/HomePage/HomePage'
import ToSPage from './pages/ToSPage/ToSPage'
import PrivacyPage from './pages/PrivacyPage/PrivacyPage'
import AboutPage from './pages/AboutPage/AboutPage'
import JourneysPage from './pages/Journey/JourneysPage/JourneysPage'
import JourneyPage from './pages/Journey/JourneyPage/JourneyPage'
import CreateJourneyPage from './pages/Journey/CreateJourneyPage/CreateJourneyPage'
import TokensPage from './pages/TokensPage/TokensPage'
import CreateTokenPage from './pages/CreateTokenPage/CreateTokenPage'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import Callback from './pages/Callback/Callback'
import { Slide, Typography } from '@mui/material'
import useStore from './state/store'
import CustomSnackbar from './components/Custom/CustomSnackbar/CustomSnackbar'
import EvaluationsPage from './pages/Evaluation/EvaluationsPage/EvaluationsPage'
import EvaluationPage from './pages/Evaluation/EvaluationPage/EvaluationPage'
import CreateEvaluationPage from './pages/Evaluation/CreateEvaluationPage/CreateEvaluationPage'
import UserPage from './pages/User/UserPage/UserPage'

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

      <Route element={<AppLayout />}>
        {/* JOURNEY ROUTES */}
        <Route 
          path="journey/template/:id" 
          element={<JourneyPage />} />

        <Route element={<ProtectedRoute />}>
          {/* JOURNEY ROUTES */}
          <Route 
            path='journeys' 
            element={<JourneysPage />} />
          <Route
            path="journey/:id" 
            element={<JourneyPage />} />
          <Route 
            path="journey/create" 
            element={<CreateJourneyPage />} />
            
          {/* EVAL ROUTES */}
          <Route 
            path='evals' 
            element={<EvaluationsPage />} />
          <Route
            path="eval/:id" 
            element={<EvaluationPage />} />
          <Route 
            path="eval/create" 
            element={<CreateEvaluationPage />} />

          {/* TOKEN ROUTES */}
          <Route 
            path='tokens' 
            element={<TokensPage />} />
          <Route 
            path="token/create" 
            element={<CreateTokenPage />} />

          {/* USER ROUTES */}
          <Route 
            path='user' 
            element={<UserPage />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    </>
  )
}

export default App
