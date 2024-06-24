import { useState } from 'react'
import Navbar from './components/Navbar'
import Coinlist from './components/Coinlist'
import CoinInfoUp from './components/CoinInfoUp'
import CoininfoDown from './components/CoininfoDown'
import TradeInfo from './components/TradeInfo'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './hooks/useAuth'


const Home = () => {
  const { email, signOut } = useAuth();

  return (
    <div className="p-8 rounded-lg shadow-md bg-white max-w-md mx-auto text-center">
      <h1 className="text-2xl font-bold">Home - Protected</h1>
      <p className="mt-4 text-gray-700">Welcome, {email}</p>
      <button
        onClick={signOut}
        className="mt-6 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Logout
      </button>
    </div>
  );
};


export default function App() {

  const [mode, setMode] = useState(true)
  const handleTheme = () => {
    setMode(!mode)
  }

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<PrivateRoute> <Home /> </PrivateRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
    // <div className={`${mode && "dark"}`}>
    //   <div className='h-screen bg-[#F0F2F5] dark:bg-[#101623] text-white flex flex-col'>
    //     <Navbar mode={mode} handleTheme={handleTheme} />
    //     <div className="flex justify-between h-screen mt-1 text-black dark:text-white">
    //       <Coinlist />
    //       <div className="w-[61%] flex flex-col justify-between m-1">
    //         <CoinInfoUp />
    //         <CoininfoDown />
    //       </div>
    //       <TradeInfo />
    //     </div>
    //   </div>
    // </div>
  );
}