import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import groupingDoctors from '../logics/groupingDoctors';
import {
  getMainPageDoctors,
  mainPageDoctors,
} from '../redux/mainPage/mainPageSlice';
import { fetchAllDoctors } from '../redux/doctor/doctorSlice';
import MainPageCaroussel from '../components/MainPageCaroussel';

const MainPage = () => {
  const dispatch = useDispatch();
  const { doctors, isLoading, error } = useSelector(mainPageDoctors);
  let allDoctors = useSelector((state) => state.doctor.doctors);

  useEffect(() => {
    if (doctors.length === 0) dispatch(getMainPageDoctors());
    if (allDoctors.length === 0) dispatch(fetchAllDoctors());
  }, [dispatch]);

  allDoctors = useSelector((state) => state.doctor.doctors);
  const doctorsGroup = groupingDoctors(doctors, allDoctors);
  doctorsGroup.unshift(doctors);

  return (
    <div className="pt-[100px] flex flex-col items-center w-full md:w-[calc(100%-210px)]">
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

      <div className="md:w-[calc(100%)]">
        <MainPageCaroussel
          isLoading={isLoading}
          error={error}
          doctorsGroup={doctorsGroup}
        />
      </div>

    </div>
  );
};

export default MainPage;
