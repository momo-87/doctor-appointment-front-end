import Doctor from '../components/Doctor';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { doctorData } from '../redux/doctor/doctorSlice';
import { getDoctor } from '../redux/doctor/doctorSlice';

const DetailsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDoctor());
  }, [dispatch]);
  const { doctor, isLoading, error } = useSelector(doctorData);
  return(
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
