
import './App.css';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import AddContact from './components/AddContact';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddContact/>} />
        <Route path="/edit/:id" element={<Edit/>} />
      </Routes>


    </div>
  );
}

export default App;
