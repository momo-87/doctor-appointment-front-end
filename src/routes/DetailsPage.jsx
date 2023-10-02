import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Doctor from '../components/Doctor';
import { mainPageDoctors } from '../redux/mainPage/mainPageSlice';

const DetailsPage = () => {
  const { clickedDoctor } = useSelector(mainPageDoctors);

  useEffect(() => {
    if (Object.keys(clickedDoctor).length > 0) {
      localStorage.setItem('clickedDoctor', JSON.stringify(clickedDoctor));
    }
  }, [clickedDoctor]);

  const doctor = Object.keys(clickedDoctor).length > 0 ? clickedDoctor : JSON.parse(localStorage.getItem('clickedDoctor'));

  return (
    <div>
      <Doctor
        doctor={doctor}
      />
    </div>
  );
};

export default DetailsPage;
