// import { useState } from 'react'
// import { Link } from 'react-router-dom'

// function App() {

//   return (
//     <div>
//       <div>Portfolio Home</div>
//       <Link to='/portfolio'>Go to Portfolio</Link>
//     </div>
//   )
// }

// export default App


import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
