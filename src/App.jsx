
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MyBanks from './pages/MyBanks'
import TransactionHistory from './pages/TransactionHistory'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashSidebar from './components/DashSidebar';
import Login from './pages/Login';


function App() {

  return (
    <>
      <Router>
        
        <Routes>
          <Route path='/dashtab' element={<><Navbar /><DashSidebar /></>}>
            <Route path="" element={<Home />} />
            <Route path="mybanks" element={<MyBanks />} />
            <Route path="transactionhistory" element={<TransactionHistory />} />
          </Route>
          <Route path='/user/login' element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App





