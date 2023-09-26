import { useSelector } from 'react-redux';
import Doctor from '../components/Doctor';
import { mainPageDoctors } from '../redux/mainPage/mainPageSlice';

const DetailsPage = () => {
  const { clickedDoctor } = useSelector(mainPageDoctors);
  return (
    <div>
      <Doctor
        doctor={clickedDoctor}
      />
    </div>
  );
};

export default DetailsPage;
