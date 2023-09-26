import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDoctor, doctorData } from '../redux/doctor/doctorSlice';
import Doctor from '../components/Doctor';

const DetailsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDoctor());
  }, [dispatch]);
  const { doctor, isLoading, error } = useSelector(doctorData);
  return (
    <div>
      <Doctor
        doctor={doctor}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};

export default DetailsPage;
