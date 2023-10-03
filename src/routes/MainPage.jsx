import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import removeDuplicateDoctors from '../logics/removeDuplicateDoctors';
import {
  getMainPageDoctors,
  mainPageDoctors,
} from '../redux/mainPage/mainPageSlice';
import MainPageCarousel from '../components/MainPageCarousel';

const MainPage = () => {
  const dispatch = useDispatch();
  const {
    doctors, isLoading, error, status,
  } = useSelector(mainPageDoctors);
  let allDoctors = useSelector((state) => state.doctor.doctors);

  useEffect(() => {
    if (status === 'not started') {
      dispatch(getMainPageDoctors());
    } else if (allDoctors !== null) {
      allDoctors = removeDuplicateDoctors(doctors, allDoctors);
      allDoctors = [...doctors, ...allDoctors];
    }
    return () => {};
  }, [dispatch, status, allDoctors]);

  return (
    <div className="pt-[100px] flex flex-col items-center w-full">
      <div className="md:mb-[80px] mb-10">
        <h1 className="text-center md:text-2xl text-xl font-extrabold">
          DOCTORS LIST
        </h1>
        <p className="font-bold text-sm text-gray-300 text-center">
          Please select a doctor
        </p>
      </div>
      {isLoading && (
        <div className="relative flex justify-center">
          <div className="lds-roller">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      )}
      {error && <p>{error}</p>}

      <div className="md:w-[100%] md:overflow-hidden">
        <MainPageCarousel
          isLoading={isLoading}
          error={error}
          allDoctors={allDoctors}
        />
      </div>
    </div>
  );
};

export default MainPage;
