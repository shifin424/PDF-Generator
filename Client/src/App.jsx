import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserRoutes from './Routes/UserRoutes';
import Theme from './Components/Theme/Theme';



function App() {


  return (
    <>
      <Theme />
      <Router>
        <Routes>
          <Route path='/*' element={<UserRoutes />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
