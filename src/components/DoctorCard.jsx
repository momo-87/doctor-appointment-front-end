import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addClickedDoctor } from '../redux/mainPage/mainPageSlice';

const DoctorCard = ({ doctor }) => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(addClickedDoctor(doctor));

  return (
    <>
      <NavLink
        to="details"
        onClick={() => (handleClick())}
      >
        <div className="hover:border-4 hover:border-gray-500 px-3 md:w-full py-5 rounded-lg w-[95%] mx-auto border-4 border-white mb-4 h-full">
          <div className="w-[70%] rounded-full mx-auto bg-color-aliceblue">
            <img src={`data:image/png;base64,${doctor.image}`} alt="Doctor" />
          </div>
          <h2 className="text-lg font-extrabold flex justify-center mt-5">{doctor.name}</h2>
          <p className="text-gray-500 text-center">{doctor.bio}</p>
        </div>
      </NavLink>
    </>
  );
};

export default DoctorCard;

DoctorCard.propTypes = {
  doctor: PropTypes.shape({
    name: PropTypes.string,
    bio: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};
