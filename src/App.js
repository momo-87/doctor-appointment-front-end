import { Route, Routes } from 'react-router-dom';
import NotMatch from './routes/NotMatch';
import MainPage from './routes/MainPage';
import DetailsPage from './routes/DetailsPage';
import Layout from './components/Layout';
import AuthPage from './routes/AuthPage';
import MyAppointmentsPage from './routes/MyAppointmentsPage';
import DeleteDoctorList from './routes/DeleteDoctors';
import NewAppointmentPage from './routes/NewAppointmentPage';
import AddDoctor from './routes/AddDoctor';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="details" element={<DetailsPage />} />
        <Route path="my-appointments" element={<MyAppointmentsPage />} />
        <Route path="delete-doctor" element={<DeleteDoctorList />} />
        <Route path="new-appointment" element={<NewAppointmentPage />} />
        <Route path="add-doctor" element={<AddDoctor />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  </div>
);

export default App;
