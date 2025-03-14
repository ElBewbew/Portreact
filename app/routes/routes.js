import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Presentation from './Presentation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/presentation" element={<Presentation />} />
      </Routes>
    </Router>
  );
}

export default App;