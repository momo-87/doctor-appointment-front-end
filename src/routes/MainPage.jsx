import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  getMainPageDoctors,
  mainPageDoctors,
} from '../redux/mainPage/mainPageSlice';
import DoctorCard from '../components/DoctorCard';

const MainPage = () => {
  const dispatch = useDispatch();
  const {
    doctors, isLoading, error, status,
  } = useSelector(mainPageDoctors);

  useEffect(() => {
    if (status === 'not started') {
      dispatch(getMainPageDoctors());
    }
    return () => {};
  }, [dispatch, status]);

  return (
    <div className="pt-[100px] flex flex-col items-center w-full">
      <div className="md:mb-[100px] mb-10">
        <h1 className="text-center md:text-2xl text-xl font-extrabold">
          DOCTORS LIST
        </h1>
        <p className="font-bold text-lg text-gray-300">
          Please select a doctor
        </p>
      </div>

      <div className="md:grid flex flex-col md:grid-cols-[31%,31%,31%] md:grid-rows-1 md:w-[70%] mx-auto md:gap-[10%] gap-[75px]">
        {isLoading && <p>Is Loading</p>}
        {error && <p>{error}</p>}
        {!isLoading
          && !error
          && doctors.map((doctorItem) => (
            <DoctorCard key={doctorItem.id} doctor={doctorItem} />
          ))}
      </div>
    </div>
  );
};

export default MainPage;
