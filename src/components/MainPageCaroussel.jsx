import PropTypes from 'prop-types';
import { Carousel, IconButton } from '@material-tailwind/react';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import { v4 as uuidv4 } from 'uuid';
import DoctorCard from './DoctorCard';

const MainPageCaroussel = ({
  isLoading,
  error,
  doctorsGroup,
}) => (
  <Carousel
    prevArrow={({ handlePrev }) => (
      <IconButton
        onClick={handlePrev}
        className="!absolute mt-[150px] -translate-y-2/4"
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
        className="!absolute mt-[100px] !right-0 -translate-y-2/4"
      >
        {!isLoading && (
          <div className="mt-[100px] hidden md:flex pl-[15px] bg-color-gray h-[50px] items-center w-[70px] rounded-l-3xl hover:bg-color-green">
            <BiRightArrow className="text-2xl text-white" />
          </div>
        ) }
      </IconButton>
    )}
    className="overflow-hidden"
  >
    {
      doctorsGroup.map((group) => (
        <div
          className="md:flex-row flex flex-col md:min-w-[1400px] md:gap-[10%] gap-[75px] md:px-[70px] w-full"
          key={uuidv4()}
        >
          {!isLoading
          && !error
          && group.map((doctorItem) => (
            <div
              className="md:w-[31%] w-full"
              key={doctorItem.id}
            >
              <DoctorCard doctor={doctorItem} />
            </div>
          ))}
        </div>
      ))
    }
  </Carousel>
);

export default MainPageCaroussel;

MainPageCaroussel.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  doctorsGroup: PropTypes.arrayOf().isRequired,
};
