import { Route, Routes } from 'react-router-dom';
import Applications from './pages/Applications.jsx';
import ApplyJob from './pages/ApplyJob';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apply-job/:id' element={<ApplyJob />} />
        <Route path='/applications' element={<Applications />} />
      </Routes>
    </div>
  );
};

export default App;
