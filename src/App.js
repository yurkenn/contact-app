import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Contacts from './components/Contacts';
import Edit from './components/Edit/Edit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Contacts />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
