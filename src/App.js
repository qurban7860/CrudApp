// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserForm from "./components/userForm";
import UserList from "./components/userList";
import Footer from "./components/footer";
import Header from "./components/header";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

export default function App() {
  return (
    <Router>
    <Header /> 
    <div className="App p-6 mb-20"> 
      <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/" element={<UserForm />} />
      <Route path="/user-list" element={<UserList />} />
      </Routes>
      <Footer />
    </div>
  </Router>
  );
}
