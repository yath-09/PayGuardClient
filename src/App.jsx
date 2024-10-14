
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MyBanks from './pages/MyBanks'
import TransactionHistory from './pages/TransactionHistory'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashSidebar from './components/DashSidebar';


function App() {

  return (
   <>
       <Router>
        <Navbar />
        <div className="flex h-screen">
          <div className="lg:block w-[15%]">
            <DashSidebar />
          </div>
          <div className="flex-grow bg-[#F5F5F5]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/mybanks" element={<MyBanks />} />
              <Route path="/transactionhistory" element={<TransactionHistory />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App





