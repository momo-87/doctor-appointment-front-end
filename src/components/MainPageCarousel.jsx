import PropTypes from 'prop-types';
import { Carousel, IconButton } from '@material-tailwind/react';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import DoctorCard from './DoctorCard';

const MainPageCarousel = ({
  isLoading,
  error,
  allDoctors,
}) => (
  <Carousel
    transition={{ duration: 1.5 }}
    prevArrow={({ handlePrev }) => (
      <IconButton
        onClick={handlePrev}
        className="!absolute mt-[150px] -translate-y-2/4 rounded-none"
      >
        {!isLoading && (
          <div className="hidden md:flex pl-[30px] bg-color-gray h-[50px] items-center w-[70px] rounded-r-3xl hover:bg-color-green">
            <BiLeftArrow className="text-2xl text-white" />
          </div>
        ) }
      </IconButton>
    )}
    nextArrow={({ handleNext }) => (
      <IconButton
        onClick={handleNext}
        className="!absolute mt-[100px] !right-0 -translate-y-2/4 rounded-none"
      >
        {!isLoading && (
          <div className="mt-[100px] hidden md:flex pl-[15px] bg-color-gray h-[50px] items-center w-[70px] rounded-l-3xl hover:bg-color-green">
            <BiRightArrow className="text-2xl text-white" />
          </div>
        ) }
      </IconButton>
    )}
    className="flex flex-col md:grid md:grid-flow-col  md:justify-between md:gap-[1.75%] md:overflow-hidden"
  >
    {!isLoading
    && !error
    && allDoctors !== null
    && allDoctors.map((doctorItem) => (
      <div
        className="md:w-[300px] w-full md:!mx-[70px]"
        key={doctorItem.id}
      >
        <DoctorCard doctor={doctorItem} />
      </div>
    ))}
  </Carousel>
);

export default MainPageCarousel;

MainPageCarousel.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  allDoctors: PropTypes.arrayOf().isRequired,
};
