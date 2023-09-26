import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMainPageDoctors, mainPageDoctors } from '../redux/mainPage/mainPageSlice';
import DoctorCard from '../components/DoctorCard';

const MainPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMainPageDoctors());
  }, [dispatch]);
  const { doctors, isLoading, error } = useSelector(mainPageDoctors);

  return (
    <div className="pt-[100px]">
      <div>
        <h1 className="text-center">DOCTORS LIST</h1>
        <p>Please select a doctor</p>
      </div>

      <div>
        {isLoading && (<p>Is Loading</p>)}
        {error && (<p>{error}</p>)}
        {(!isLoading && !error) && (
          doctors.map((doctorItem) => (
            <DoctorCard
              key={doctorItem.id}
              doctor={doctorItem}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default MainPage;
