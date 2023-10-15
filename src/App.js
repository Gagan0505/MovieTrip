import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './container/LandingPage/LandingPage';
import SignIn from "./container/SignIn/SignIn";
import HomePage from './container/Homepage/Homepage';
import { useAuth0 } from '@auth0/auth0-react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
function App() {
  const {isLoading, isAuthenticated} = useAuth0();
  return (
    <BrowserRouter>
    <div className='app'>
       <Routes>
        <Route
         path="/"
         element={isAuthenticated ? <HomePage /> : <LandingPage />} />
         <Route path="/sign-in" element={<SignIn />} />
         {/* <Route path="/Homepage" element={<HomePage />} /> */} 
       </Routes>
       {isLoading && (<div className='loadingModal'>
      <div className='overlay'><div className='LoadingContainer'>
      <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box></div>
      </div>
      </div>
      )}
    </div>
    </BrowserRouter>
  );
}

export default App;
