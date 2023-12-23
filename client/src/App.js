import React,{useContext, useState} from 'react'
import Header from './components/header/Header';
import Home from './components/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminDashboard from './components/admin/AdminDashboard';
import UserDashboard from './components/user/UserDashboard';
import  { DataContext } from './components/context/DataProvider';
const App = () => {
  const {account,setAccount}=useContext(DataContext)
  const [searchInput,setSearchInput]=useState("");
  return (
    <div>
      <Router>
        <Header  setSearchInput={setSearchInput} />
        <Routes>
          {
            
            account.email ? (
              <>
              {
                account.userType=="admin" && <Route path='/admin/dashboard' element={<AdminDashboard />} />
              }
                {
                  account.userType=="user" && <Route path='/user/dashboard' element={<UserDashboard />} />
                }
              </>
            ) : (<Route path='/' element={<Home searchInput={searchInput} />} />)
          }

<Route path='/admin/dashboard' element={<AdminDashboard />} />
        </Routes>

      </Router>

    </div>
  )
}

export default App;