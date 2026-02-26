import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './layout/ClientLayout/Sidebar.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import MyOrders from './pages/MyOrders/MyOrders.jsx';
import Messages from './pages/Messages/Messages.jsx';
import Notifications from './pages/Notifications/Notifications.jsx';
import Profile from './pages/Profile/Profile.jsx';
import './App.css';

function App() {
  const [gender, setGender] = useState('female');

  return (
    <BrowserRouter>
      <div className="app-shell">
        <Sidebar />
        <main className="main">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<MyOrders />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/profile" element={<Profile gender={gender} setGender={setGender} />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;