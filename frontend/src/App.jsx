import './assets/styles/tailwind.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage';
import AddToDoPage from './pages/AddToDoPage';
import Header from './components/Header';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/add" element={<AddToDoPage />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App
