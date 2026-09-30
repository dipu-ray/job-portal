import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import Login from './pages/Login'
import Register from './pages/Register'
import SeekerDashboard from './pages/SeekerDashboard'
import RecruiterDashboard from './pages/RecruiterDashboard'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="dashboard/seeker"
            element={
              <ProtectedRoute allowedRole="Seeker">
                <SeekerDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="dashboard/recruiter"
            element={
              <ProtectedRoute allowedRole="Recruiter">
                <RecruiterDashboard />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App