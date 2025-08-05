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

import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  );
}

export default App;
