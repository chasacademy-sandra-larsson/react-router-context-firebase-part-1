import { BrowserRouter, Routes, Route, Navigate, Link, Outlet } from 'react-router-dom'
import HomePage from "./components/HomePage";
import SignInForm from './components/SignInForm';
import SignInPage from './components/SignInPage';
import SignUpForm from './components/SignUpForm';
import SignUpPage from './components/SignUpPage';
import Dashboard from './components/Dashboard'

function ProtectedRoute() {

  const isAuthenticated = false;

  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" replace />;

}


function App() {

    const handleSignOut = () => {
      // vi återkommer
    }

  return (
    <BrowserRouter>
          <header>
            <nav>
              <ul>
                <li>
                  <Link to="/signin">Sign in</Link>
                </li>
                <li>
                  <Link to="/signup">Sign up</Link>
                </li>
                <li>
                  <button onClick={handleSignOut}>Sign Out</button>
                </li>
              </ul>
            </nav>
          </header>
          <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/signup" element={<SignUpPage/>}/>
              <Route path="/signin" element={<SignInPage/>}/>
              <Route path="/dashboard" element={<ProtectedRoute/>}>
                 <Route path="/dashboard" element={<Dashboard/>}/> 
              </Route>
          </Routes>
    </BrowserRouter>
  )
}

export default App
