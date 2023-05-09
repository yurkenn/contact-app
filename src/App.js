import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Contacts from './components/Contacts';
import Edit from './components/Edit/Edit';
import Error from './components/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Contacts />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path='/*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
