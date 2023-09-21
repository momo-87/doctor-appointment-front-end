import { Route, Routes } from 'react-router-dom';
import NotMatch from './routes/NotMatch';
import MainPage from './routes/MainPage';
import DetailsPage from './routes/DetailsPage';
import Layout from './components/Layout';

import './App.css';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="details" element={<DetailsPage />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  </div>
);

export default App;
